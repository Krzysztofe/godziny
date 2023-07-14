import * as yup from "yup";
import useMonthDates from "../../../hooks/useMonthDates";

const useValidationSidebarMonthForm = () => {
const { monthDates } = useMonthDates();

const validationSchema = yup.object({
  monthDate: yup
    .string()
    .test(
      "is-in-database",
      "Miesiąc zapisany",
      value => value !== undefined && !monthDates?.includes(value)
    ),
});


  return { validationSchema };
};

export default useValidationSidebarMonthForm;
