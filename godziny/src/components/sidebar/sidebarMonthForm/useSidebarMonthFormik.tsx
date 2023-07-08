import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import {
  currMonthDigits,
  currYearDigits,
} from "../../../data/dataCurrentDates";
import useMonthDates from "../../../hooks/useMonthDates";
import {
  useAddMonthMutation,
  useMonthsDataQuery
} from "../../../services/apiSlice";
import { monthPattern, ModelMonthPattern} from "./dataSidebarMonthForm";



interface ModelFormValues {
  monthDate: string;
}

const useSidebarMonthFormik = () => {
  const navigate = useNavigate();
  const { data } = useMonthsDataQuery(undefined);
  const { monthDates } = useMonthDates(data);
  const [addMonth, success] = useAddMonthMutation();

  const formik = useFormik<ModelFormValues>({
    initialValues: { monthDate: `${currYearDigits}-${currMonthDigits}` },
    validationSchema: yup.object({
      monthDate: yup
        .string()
        .test(
          "is-in-database",
          "Miesiąc zapisany",
          value => value !== undefined && !monthDates?.includes(value)
        ),
    }),

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
