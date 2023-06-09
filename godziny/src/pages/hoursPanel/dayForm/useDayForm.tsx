import { useFormik } from "formik";
import useDataBaseValues from "../useDataBaseValues";
import { columnsWithAddedDays, initialValues } from "./dataDayForm";
import { validationSchema } from "./validationDayForm";

interface FormValues {
  date: string;
  hours: number | string;
  userName: string;
  place: string;
}

const useDayForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async values => {
      formik.setFieldValue("id", crypto.randomUUID());
      columnsWithAddedDays[0].days = [values];

      data === null
        ? await addDays(columnsWithAddedDays)
        : await updateColumns({
            id: columnsIdFRomDatabase,
            columns: updatedColumns,
          });
          
    },
  
  });

  const {
    columnsIdFRomDatabase,
    updatedColumns,
    data,
    success,
    updateColumns,
    addDays,
  } = useDataBaseValues(formik.values);

// console.log("", success.isLoading);

  return { formik };
};

export default useDayForm;
