import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import useDatabaseValues from "../../../../hooks/useDatabaseValues";

import { validationSchema } from "./validationMonthPanelHeaderForm";
import useURLValues from "../../../../hooks/useURLValues";
import { useAddAllHoursMutation } from "../../../../services/apiSlice";

interface ModelFormValues {
  allHours: number;
}

const useMonthPanelHeaderFormik = () => {
 
  const { monthURL, yearFromURL, monthFromURL } = useURLValues();

  const [addAllHours, success] = useAddAllHoursMutation()
  

  const formik = useFormik<ModelFormValues>({
    initialValues: { allHours: 0 },
    validationSchema: validationSchema,
    onSubmit: async values => {
      // if (
      //   dataBaseSubmitedHours + databaseAcceptedHours >
      //   +formik.values.allHours
      // )
      //   return;

console.log('',values.allHours)

await addAllHours({ year: yearFromURL, month: monthFromURL, allHours: +values.allHours });

   
    },
  });

  return { formik, success};
};

export default useMonthPanelHeaderFormik;
