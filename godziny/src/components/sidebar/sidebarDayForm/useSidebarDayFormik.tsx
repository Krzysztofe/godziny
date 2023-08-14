import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { dateInNext14Days } from "../../../data/dataCurrentDates";
import useURLValues from "../../../hooks/useURLValues";
import { ModelUser } from "../../../pages/settings/settingsUserForm/useSettingsUserFormik";
import { RootState } from "../../../redux/store";
import {
  useAddDayMutation
} from "../../../services/apiSliceMonths";
import { validationSchema } from "./validationSidebarDayFormik";
import { v4 as UUID } from "uuid";

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
  const { month } = useSelector((state: RootState) => state.monthsPanel);
  const { users } = useSelector((state: RootState) => state.users);
  const [addDay, success] = useAddDayMutation();
  const firstColumn = month && month?.columns?.[0];

  const formik = useFormik<ModelDay>({
    initialValues: {
      id: "",
      date: dateInNext14Days,
      hours: "",
      userName: "Imię",
      place: "",
      userColor: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      if (
        month?.calc?.currentHours - +values.hours < 0 ||
        month?.calc?.currentHours === 0
      )
        return;

      const userColor = users?.find((user: ModelUser) => {
        return user.userName === values.userName;
      })?.userColor;

      const valuesToDatabase = {
        ...values,
        id: UUID(),
        hours: +values.hours,
        userColor: userColor || "",
      };

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

    },
  });

  return { formik, success };
};

export default useSidebarDayFormik;
