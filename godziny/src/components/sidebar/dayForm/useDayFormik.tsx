import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import { dateIn14Days } from "../../../data/dataCurrentDates";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { useUpdateMonthMutation } from "../../../services/apiSlice";
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

  const lastPartMonthURL = pathname.split("/").pop() || "";

  const { databaseColumns, databaseMonth, data, dataCurrentHours } =
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

      if (data && databaseMonth?.id && databaseColumns?.length > 0) {
        const databaseColumnsAddedDays = JSON.parse(
          JSON.stringify(databaseColumns)
        );

        const hours = +values.hours || 0;

        databaseColumnsAddedDays?.[0]?.days?.push({
          ...values,
          hours,
        });

        await updateMonth({
          id: databaseMonth.id,
          month: {
            ...databaseMonth,
            columns: databaseColumnsAddedDays,
          },
        });
      }
    },
  });

  return { formik, success };
};

export default useDayFormik;
