import { useFormik } from "formik";
import { useParams, useLocation } from "react-router-dom";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { initialValues } from "./dataDayForm";
import { validationSchema } from "./validationDayForm";
import { useUpdateMonthMutation } from "../../../services/apiSlice";

interface FormValues {
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
    initialValues: initialValues,
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
