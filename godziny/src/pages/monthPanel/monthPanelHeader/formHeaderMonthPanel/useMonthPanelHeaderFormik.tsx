import { useFormik } from "formik";
import useURLValues from "../../../../hooks/useURLValues";
import {
  useAddAllHoursMutation,
  useCalcDataQuery,
} from "../../../../services/apiSlice";
import { validationSchema } from "./validationMonthPanelHeaderForm";

interface ModelFormValues {
  allHours: number;
}

const useMonthPanelHeaderFormik = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataCalc } = useCalcDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  const [addAllHours, success] = useAddAllHoursMutation();
  
 let submittedHours = 0;
 let acceptedHours = 0;

 if (dataCalc?.submittedHours && dataCalc.acceptedHours) {
   submittedHours = dataCalc?.submittedHours;
   acceptedHours = dataCalc?.acceptedHours;
 }


  const formik = useFormik<ModelFormValues>({
    initialValues: { allHours: 0 },
    validationSchema: validationSchema,
    onSubmit: async values => {
      if (
        submittedHours + acceptedHours >
        +formik.values.allHours
      )
        return;

      await addAllHours({
        year: yearFromURL,
        month: monthFromURL,
        allHours: +values.allHours,
      });
    },
  });

  return { formik, success };
};

export default useMonthPanelHeaderFormik;
