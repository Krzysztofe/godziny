import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import { dateIn14Days } from "../../../data/dataCurrentDates";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import {
  useAddDayMutation,
  useFirstColumnDataQuery,
} from "../../../services/apiSlice";
import { validationSchema } from "./validationDayFormik";

interface FormValues {
  id: string;
  date: string;
  hours: number;
  userName: string;
  place: string;
}

const useDayFormik = () => {
  const { pathname } = useLocation();
  const [addDay, success] = useAddDayMutation();

  const lastPartMonthURL = pathname.split("/").pop() || "";
  const yearFromURL = lastPartMonthURL.slice(0, 4);
  const monthFromURL = lastPartMonthURL.slice(-2);

  const { data: dataFirstColumn } = useFirstColumnDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      id: crypto.randomUUID(),
      date: dateIn14Days,
      hours: 0,
      userName: "",
      place: "",
    },
    validationSchema: validationSchema,

    onSubmit: async values => {
      formik.setFieldValue("id", crypto.randomUUID());
      // if (dataCurrentHours - +formik.values.hours < 0) return;
 
      const valuesToDatabase = { ...values, hours: +values.hours };
   

      await addDay({
        year: yearFromURL,
        month: monthFromURL,
        monthBody: {
          ...dataFirstColumn,
          days: dataFirstColumn?.days
            ? [...dataFirstColumn.days, valuesToDatabase]
            : [valuesToDatabase],
        },
      });
    },
  });

  return { formik, success };
};

export default useDayFormik;
