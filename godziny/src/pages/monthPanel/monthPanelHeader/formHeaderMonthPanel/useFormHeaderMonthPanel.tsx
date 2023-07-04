import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import useDatabaseValues from "../../../../hooks/useDatabaseValues";
import { useUpdateMonthMutation } from "../../../../services/apiSlice";
import { validationSchema } from "./validationFormHeaderMonthPanel";

interface ModelFormValues {
  allHours: number;
}

const useFormHeaderMonhPanel = () => {
  const { monthURL } = useParams();
  const [updateColumns, success] = useUpdateMonthMutation();
  const { databaseMonth, data, dataBaseSubmitedHours, databaseAcceptedHours } =
    useDatabaseValues(monthURL);

  const formik = useFormik<ModelFormValues>({
    initialValues: { allHours: 0 },
    validationSchema: validationSchema,
    onSubmit: async values => {
      if (
        dataBaseSubmitedHours + databaseAcceptedHours >
        +formik.values.allHours
      )
        return;
      await updateColumns({
        id: data && databaseMonth?.id,
        month: {
          ...databaseMonth,
          allHours: values.allHours,
        },
      });
      //  resetForm();
    },
  });

  return { formik, success };
};

export default useFormHeaderMonhPanel;
