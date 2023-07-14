import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  currMonthDigits,
  currYearDigits,
} from "../../../data/dataCurrentDates";
import { useAddMonthMutation } from "../../../services/apiSliceMonths";
import { ModelMonthPattern, monthPattern } from "./dataSidebarMonthForm";
import useValidationSidebarMonthForm from "./useValidationSidebarMonthForm";

interface ModelFormValues {
  monthDate: string;
}

const useSidebarMonthFormik = () => {
  const navigate = useNavigate();
  const [addMonth, success] = useAddMonthMutation();
  const { validationSchema } = useValidationSidebarMonthForm();

  const formik = useFormik<ModelFormValues>({
    initialValues: { monthDate: `${currYearDigits}-${currMonthDigits}` },
    validationSchema: validationSchema,

    onSubmit: async values => {
      const year = values.monthDate.slice(0, 4);
      const month = values.monthDate.slice(-2);
      const monthBody: ModelMonthPattern = {
        ...monthPattern,
        id: values.monthDate,
      };

      await addMonth({ year, month, monthBody });
      navigate(`/${values.monthDate}`);
    },
  });

  return { formik, success };
};

export default useSidebarMonthFormik;
