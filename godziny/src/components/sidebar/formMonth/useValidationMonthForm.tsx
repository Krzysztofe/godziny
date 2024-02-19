import * as yup from "yup";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";


const useValidationMonthForm = () => {
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

  const validationSchema = yup.object({
    monthDate: yup
      .string()
      .test(
        "is-in-database",
        "Miesiąc zapisany",
        value => value !== undefined && !listMonths?.includes(value)
      ),
  });

  return { validationSchema };
};

export default useValidationMonthForm;
