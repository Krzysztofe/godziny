import { useFormik } from "formik";
import { monthPattern } from "./dataSidebarMonthForm";
import { useAddMonthMutation } from "../../../services/apiSlice";
import * as yup from "yup";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { useNavigate } from "react-router-dom";
import {
  currYearDigits,
  currMonthDigits,
} from "../../../data/dataCurrentDates";

interface ModelFormValues {
  monthDate: string;
}

const useSidebarMonthFormik = () => {
  const navigate = useNavigate();
  const [addMonth, success] = useAddMonthMutation();

  const { databaseMonthsDates = [] } = useDatabaseValues();

  const formik = useFormik<ModelFormValues>({
    initialValues: { monthDate: `${currYearDigits}-${currMonthDigits}` },
    validationSchema: yup.object({
      monthDate: yup
        .string()
        .test(
          "is-in-database",
          "Miesiąc już zapisany",
          value => value !== undefined && !databaseMonthsDates?.includes(value)
        ),
    }),

    onSubmit: async values => {
      const year = values.monthDate.slice(0, 4);
      const month = values.monthDate.slice(-2);
      const monthBody = { ...monthPattern, id: values.monthDate };

      await addMonth({ year, month, monthBody });
      navigate(`/${values.monthDate}`);
    },
  });

  return { formik, success };
};

export default useSidebarMonthFormik;
