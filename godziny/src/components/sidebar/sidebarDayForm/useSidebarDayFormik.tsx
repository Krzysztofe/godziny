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
  const { data: dataCalc } = useCalcDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });
  const { data: dataFirstColumn } = useFirstColumnDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });
  const { data: dataUsers } = useUsersQuery();
  const [addDay, success] = useAddDayMutation();

  const currentHours = dataCalc?.currentHours || 0;
  const firstColumn = dataFirstColumn?.days
    ? dataFirstColumn
    : { id: "submitted", days: [] };
  const users = dataUsers || [];

  const formik = useFormik<ModelDay>({
    initialValues: {
      id: "",
      date: dateInNext14Days,
      hours: "",
      userName: "",
      place: "",
      userColor: "",
    },
    validationSchema: validationSchema,

    onSubmit: async values => {
      if (currentHours - +values.hours < 0 || currentHours === 0) return;

      const userColor = users.find((user: ModelUser) => {
        return user.userName === values.userName;
      })?.userColor;

      const valuesToDatabase = {
        ...values,
        id: crypto.randomUUID(),
        hours: +values.hours,
        userColor: userColor || "",
      };

      if (dataFirstColumn?.id) {
        await addDay({
          year: yearFromURL,
          month: monthFromURL,
          firstColumnBody: {
            ...firstColumn,
            days: firstColumn?.days
              ? [...firstColumn.days, valuesToDatabase]
              : [valuesToDatabase],
          },
        });
      }
    },
  });

  return { formik, success };
};

export default useSidebarDayFormik;
