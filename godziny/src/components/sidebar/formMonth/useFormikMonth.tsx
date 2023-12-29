import {
  currMonthDigits,
  currYearDigits,
} from "../../../data/dataCurrentDates";
import { useUpdateMonthMutation } from "../../../services/apiSliceMonths";
import * as yup from "yup";
import { ModelMonth } from "../../../sharedModels/modelMonth";
import { monthPattern } from "./dataFormMonth";
import useValidationMonthForm from "./useValidationMonthForm";

interface ModelInitialValues {
  monthDate: string;
}

const useFormikMonth = () => {
  const [updateMonth, success] = useUpdateMonthMutation();

  const { validationSchema } = useValidationMonthForm();

  const initialValues = { monthDate: `${currYearDigits}-${currMonthDigits}` };

  const validation = validationSchema as yup.ObjectSchema<typeof initialValues>;

  const onSubmit = async (values: ModelInitialValues) => {
    const year = values.monthDate.slice(0, 4);
    const month = values.monthDate.slice(-2);
    const monthBody: ModelMonth = {
      ...monthPattern,
      id: values.monthDate,
    };

    await updateMonth({ year, month, monthBody });
  };

  return { initialValues, validation, onSubmit, success };
};

export default useFormikMonth;
