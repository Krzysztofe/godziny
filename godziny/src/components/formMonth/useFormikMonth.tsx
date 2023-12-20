import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currMonthDigits, currYearDigits } from "../../data/dataCurrentDates";
import { RootState } from "../../redux/store";
import {
  useDeleteMonthMutation,
  useUpdateListMonthsMutation,
  useUpdateMonthMutation,
} from "../../services/apiSliceMonths";

import useValidationMonthForm from "./useValidationMonthForm";
import * as yup from "yup";
import { monthPattern } from "./dataFormMonth";
import { ModelMonth } from "../../sharedModels/modelMonth";
import { sortListMonths } from "../../utils/sortListMonths";


interface ModelInitialValues {
  monthDate: string;
}

const useFormikMonth = () => {
  const navigate = useNavigate();
  const [updateMonth, success] = useUpdateMonthMutation();
  const [updateListMonths] = useUpdateListMonthsMutation();
  const [deleteMonth] = useDeleteMonthMutation();
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { validationSchema } = useValidationMonthForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formValues, setFormValues] = useState({ monthDate: "" });

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
    setFormValues(values);
        navigate(`/godziny/${values.monthDate}`);
  };

  // const executeAddMonthInfo = async (values: ModelInitialValues) => {
  //   if (isSuccess) {
  //     const year = values.monthDate.slice(0, 4);
  //     const month = values.monthDate.slice(-2);
  //     const months = listMonths ? [...listMonths] : [];
  //     const updatedList = [...months, `${year}-${month}`];
  //     const sortedMonths = sortListMonths(updatedList);

  //     await updateListMonths(sortedMonths);
  //     navigate(`/godziny/${values.monthDate}`);
  //   } else if (success.isError) {
  //     const year = values.monthDate.slice(0, 4);
  //     const month = values.monthDate.slice(-2);
  //     await deleteMonth({ year, month });
  //   }
  // };

  useEffect(() => {
    if (success.isSuccess) {
      setIsSuccess(true);
    } else setIsSuccess(false);
  }, [success.isSuccess]);

  // useEffect(() => {
  //   executeAddMonthInfo(formValues);
  // }, [isSuccess, updateListMonths]);

  return { initialValues, validation, onSubmit, success };
};

export default useFormikMonth;
