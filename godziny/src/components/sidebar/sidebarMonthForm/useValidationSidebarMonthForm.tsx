import * as yup from "yup";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const useValidationSidebarMonthForm = () => {
  const { infoMonths } = useSelector((state: RootState) => state.infoMonths);

  const validationSchema = yup.object({
    monthDate: yup
      .string()
      .test(
        "is-in-database",
        "Miesiąc zapisany",
        value => value !== undefined && !infoMonths?.includes(value)
      ),
  });

  return { validationSchema };
};

export default useValidationSidebarMonthForm;
