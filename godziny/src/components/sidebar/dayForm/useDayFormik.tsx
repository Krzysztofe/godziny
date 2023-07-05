import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import { dateIn14Days } from "../../../data/dataCurrentDates";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import {
  useAddDayMutation,
  useAddMonthMutation,
  useFirstColumnDataQuery,
  useUpdateMonthMutation,
} from "../../../services/apiSlice";
import { validationSchema } from "./validationDayFormik";

interface FormValues {
  id: string;
  date: string;
  hours: number | string;
  userName: string;
  place: string;
}

const useDayFormik = () => {
  const [updateMonth, success] = useUpdateMonthMutation();
  const { pathname } = useLocation();
  const [addDay] = useAddDayMutation();

  const lastPartMonthURL = pathname.split("/").pop() || "";
  const yearFromURL = lastPartMonthURL.slice(0, 4);
  const monthFromURL = lastPartMonthURL.slice(-2);

  const { data } = useFirstColumnDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  // console.log("ccc", data);

  const { databaseColumns, databaseMonth, dataCurrentHours } =
    useDatabaseValues(lastPartMonthURL);

  const formik = useFormik<FormValues>({
    initialValues: {
      id: crypto.randomUUID(),
      date: dateIn14Days,
      hours: "",
      userName: "",
      place: "",
    },
    validationSchema: validationSchema,

    onSubmit: async values => {
      formik.setFieldValue("id", crypto.randomUUID());
      // if (dataCurrentHours - +formik.values.hours < 0) return;
      // console.log("", values);

      // if (data && databaseMonth?.id && databaseColumns?.length > 0) {
      //   const databaseColumnsAddedDays = JSON.parse(
      //     JSON.stringify(databaseColumns)
      //   );

      //   const hours = +values.hours || 0;

      //   databaseColumnsAddedDays?.[0]?.days?.push({
      //     ...values,
      //     hours,
      //   });
      //   await addDay({
      //     year: yearFromURL,
      //     month: monthFromURL,
      //     monthBody: {
      //       ...databaseMonth,
      //       columns: databaseColumnsAddedDays,
      //     },
      //   });
      // }

      // const newDay = data.days.push(values)
      // console.log('uuu',newDay)

      await addDay({
        year: yearFromURL,
        month: monthFromURL,
        monthBody: {
          ...data,
          days: data.days ? [...data.days, values] : [values],
        },
      });
    },
  });

  return { formik, success };
};

export default useDayFormik;
