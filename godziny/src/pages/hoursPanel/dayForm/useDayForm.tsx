import { useFormik } from "formik";
import useDataBaseValues from "../useDataBaseValues";
import { addedColumnsWithDays, initialValues } from "./dataDayForm";
import { validationSchema } from "./validationDayForm";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useUpdateColumnsMutation } from "../../../services/apiSlice";
interface FormValues {
  date: string;
  hours: number | string;
  userName: string;
  place: string;
}

const useDayForm = () => {
  const [updateColumns] = useUpdateColumnsMutation();
  const { monthValue } = useParams();

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: async values => {
      formik.setFieldValue("id", crypto.randomUUID());

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

  const { databaseColumns, databaseMonth, data } =
    useDataBaseValues(monthValue);

  return { formik };
};

export default useDayForm;
