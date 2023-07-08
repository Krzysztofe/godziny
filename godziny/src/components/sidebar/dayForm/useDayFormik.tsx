import { useFormik } from "formik";
import { dateIn14Days } from "../../../data/dataCurrentDates";

import {
  useAddDayMutation,
  useCalcDataQuery,
  useFirstColumnDataQuery,
} from "../../../services/apiSlice";
import { validationSchema } from "./validationDayFormik";
import useURLValues from "../../../hooks/useURLValues";

interface FormValues {
  id: string;
  date: string;
  hours: string;
  userName: string;
  place: string;
}

const useDayFormik = () => {
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
      if (dataCalc.currentHours - +formik.values.hours < 0) return;

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
