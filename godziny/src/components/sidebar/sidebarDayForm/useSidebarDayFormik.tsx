import { useFormik } from "formik";
import { dateInNext14Days } from "../../../data/dataCurrentDates";
import {
  useAddDayMutation,
  useCalcDataQuery,
  useFirstColumnDataQuery,
} from "../../../services/apiSliceMonths";
import { validationSchema } from "./validationSidebarDayFormik";
import useURLValues from "../../../hooks/useURLValues";
import { useUsersQuery } from "../../../services/apiSliceUsers";
import { ModelUser } from "../../../pages/settings/settingsUserForm/useSettingsUserFormik";

interface ModelDay {
  id: string;
  date: string;
  hours: string;
  userName: string;
  place: string;
  userColor: string;
}

const useSidebarDayFormik = () => {
  const { yearFromURL, monthFromURL } = useURLValues();

  const [addDay, success] = useAddDayMutation();

  const { data: dataCalc } = useCalcDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  const { data: dataFirstColumn } = useFirstColumnDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  const { data: dataUsers } = useUsersQuery();

  const users = dataUsers && dataUsers?.length > 0 ? dataUsers : [];

  const formik = useFormik<ModelDay>({
    initialValues: {
      id: crypto.randomUUID(),
      date: dateInNext14Days,
      hours: "",
      userName: "",
      place: "",
      userColor: "",
    },
    validationSchema: validationSchema,

    onSubmit: async values => {
      formik.setFieldValue("id", crypto.randomUUID());

      if (
        (dataCalc?.currentHours &&
          dataCalc?.currentHours - +formik.values.hours < 0) ||
        dataCalc?.currentHours === 0
      )
        return;

      const userColor = users.find((user: ModelUser) => {
        return user?.userName === values.userName;
      })?.userColor;

      const valuesToDatabase = {
        ...values,
        hours: +values.hours,
        userColor: userColor || "",
      };

      if (dataFirstColumn?.id) {
        await addDay({
          year: yearFromURL,
          month: monthFromURL,
          firstColumnBody: {
            ...dataFirstColumn,
            days: dataFirstColumn?.days
              ? [...dataFirstColumn.days, { ...valuesToDatabase }]
              : [{ ...valuesToDatabase }],
          },
        });
      }
    },
  });

  return { formik, success };
};

export default useSidebarDayFormik;
