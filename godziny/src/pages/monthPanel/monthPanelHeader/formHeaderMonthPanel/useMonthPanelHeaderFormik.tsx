import { useFormik } from "formik";
import { useSelector } from "react-redux";
import useURLValues from "../../../../hooks/useURLValues";
import { RootState } from "../../../../redux/store";
import { useAddAllHoursMutation } from "../../../../services/apiSliceMonths";

interface ModelFormValues {
  allHours: number;
}

const useMonthPanelHeaderFormik = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { month } = useSelector((state: RootState) => state.hoursPanel);
  const [addAllHours, success] = useAddAllHoursMutation();

  const submittedHours = month?.calc?.submittedHours;
  const acceptedHours = month?.calc?.acceptedHours;

  const formik = useFormik<ModelFormValues>({
    initialValues: { allHours: 0 },

    onSubmit: async values => {
      if (submittedHours + acceptedHours > +formik.values.allHours) return;

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
