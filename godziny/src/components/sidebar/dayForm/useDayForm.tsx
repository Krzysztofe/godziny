import { useFormik } from "formik";
import { useParams, useLocation } from "react-router-dom";
import useDataBaseValues from "../../../pages/monthPanel/useDataBaseValues";
import { initialValues } from "./dataDayForm";
import { validationSchema } from "./validationDayForm";
import { useUpdateColumnsMutation } from "../../../services/apiSlice";

interface FormValues {
  date: string;
  hours: number | string;
  userName: string;
  place: string;
}

const useDayForm = () => {
  const [updateColumns, success] = useUpdateColumnsMutation();
  const urlParts = useLocation().pathname.split("/");
  const lastPartMonthURL = urlParts[urlParts.length - 1];
  const { monthURL } = useParams();

  const { databaseColumns, databaseMonth, data, dataCurrentHours } =
    useDataBaseValues(lastPartMonthURL);

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
          days: [...databaseColumns?.[0]?.days, ...[values]],
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
