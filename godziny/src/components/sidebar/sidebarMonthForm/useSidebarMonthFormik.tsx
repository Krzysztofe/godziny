import { useFormik } from "formik";
import { monthPattern } from "./dataSidebarMonthForm";
import { useAddMonthMutation } from "../../../services/apiSlice";
import * as yup from "yup";
import useDatabaseValues from "../../../hooks/useDatabaseValues";

interface ModelFormValues {
  monthDate: string;
}

const useSidebarMonthFormik = () => {
  const [addMonth, success] = useAddMonthMutation();

  const { databaseMonthsDates } = useDatabaseValues();

  const date = new Date();

  const currYearNum = new Intl.DateTimeFormat("pl", {
    year: "numeric",
  }).format(date);

  const currMonthNum = new Intl.DateTimeFormat("pl", {
    month: "2-digit",
  }).format(date);

  const formik = useFormik<ModelFormValues>({
    initialValues: { monthDate: `${currYearNum}-${currMonthNum}` },
    validationSchema: yup.object({
      monthDate: yup.string().test(
        "is-in-database",
        "Miesiąc już zapisany",
        value => !databaseMonthsDates.includes(value)
      ),
    }),

    onSubmit: async values => {
      const monthToPOST = { ...monthPattern, monthDate: values.monthDate };
      await addMonth(monthToPOST);
    },
  });

  return { formik, success };
};

export default useSidebarMonthFormik;
