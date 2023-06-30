import { useFormik } from "formik";
import { monthPattern } from "./dataSidebarMonthForm";
import { useAddMonthMutation } from "../../../services/apiSlice";
import * as yup from "yup";
import useDatabaseValues from "../../../hooks/useMonthURLToString";
import { useNavigate } from "react-router-dom";
import {
  currYearNumber,
  currMonthNumber,
} from "../../../data/dataCurrentDates";

interface ModelFormValues {
  monthDate: string;
}

const useSidebarMonthFormik = () => {
  const navigate = useNavigate();
  const [addMonth, success] = useAddMonthMutation();

  const { databaseMonthsDates = [] } = useDatabaseValues();

  const formik = useFormik<ModelFormValues>({
    initialValues: { monthDate: `${currYearNumber}-${currMonthNumber}` },
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
      const monthToPOST = { ...monthPattern, monthDate: values.monthDate };
      await addMonth(monthToPOST);
      navigate(`/miesiac/${values.monthDate}`);
    },
  });

  return { formik, success };
};

export default useSidebarMonthFormik;
