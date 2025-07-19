import {
  currMonthDigits,
  currYearDigits,
} from "../../../data/dataCurrentDates";
import { usePostMonthMutation } from "../../../services/apiSliceMonths";
import * as yup from "yup";
import { ModelMonth } from "../../../sharedModels/modelMonth";
import { monthPattern } from "./dataFormMonth";
import useValidationMonthForm from "./useValidationMonthForm";
import { useDispatch } from "react-redux";
import { getListMonths, setCollapseIndex,addMonthToList } from "../../../redux/storeFeatures/listMonthsSlice";
import { getUpdateMonthError } from "../../../redux/storeFeatures/monthPanelSlice";
import { useEffect } from "react";
import { parse } from "path";


type ModelInitialValues = {
  monthDate: string;
};

type ModelBody = {
  year: number;
  month: number;
  allHours: number;
  currentHours: number
};

const useFormikMonth = () => {
  const dispatch = useDispatch();
  const [postMonth, success] = usePostMonthMutation();
  const { validationSchema } = useValidationMonthForm();

  const initialValues = { monthDate: `${currYearDigits}-${currMonthDigits}` };

  const validation = validationSchema as yup.ObjectSchema<typeof initialValues>;

  const onSubmit = async (values: ModelInitialValues) => {
    dispatch(setCollapseIndex(null));
    const year = values.monthDate.slice(0, 4);
    const month = values.monthDate.slice(-2);
    const monthBody: ModelBody = {
      year: parseInt(year),
      month: parseInt(month),
      allHours: 0,
      currentHours:0
    };

    await postMonth({ year, month, monthBody });
    dispatch(addMonthToList(`${year}-${month}`));
  };



  useEffect(() => {
    dispatch(getUpdateMonthError(success.isError));
  }, [success.isError, dispatch]);

  return { initialValues, validation, onSubmit, success };
};

export default useFormikMonth;
