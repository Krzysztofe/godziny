import { useFormik } from "formik";
import { useLocation, useParams } from "react-router-dom";
import { dateIn14Days } from "../../../data/dataCurrentDates";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { useUpdateMonthMutation } from "../../../services/apiSlice";
import { validationSchema } from "./validationDayForm";

interface FormValues {
  id: string;
  date: string;
  hours: number | string;
  userName: string;
  place: string;
}

const useDayForm = () => {
  const [updateColumns, success] = useUpdateMonthMutation();
  const urlParts = useLocation().pathname.split("/");
  const lastPartMonthURL = urlParts[urlParts.length - 1];
  const { monthURL } = useParams();

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
      if (dataCurrentHours - +formik.values.hours < 0) return;

      const databaseColumnsAddedDays =
        data && databaseMonth && databaseColumns?.length > 0
          ? [...databaseColumns]
          : [];

      databaseColumnsAddedDays[0] = data &&
        databaseMonth &&
        databaseColumns?.length > 0 && {
          ...databaseColumns?.[0],
          days: [
            ...databaseColumns?.[0]?.days,
            ...[{ ...values, hours: +values.hours }],
          ],
        };

      await updateColumns({
        id: data && databaseMonth.id,
        columns: {
          ...databaseMonth,
          columns: databaseColumnsAddedDays,
        },
      });
    },
  });

  return { formik, success };
};

export default useDayForm;
