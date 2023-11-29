import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currMonthDigits, currYearDigits } from "../../data/dataCurrentDates";
import { RootState } from "../../redux/store";
import {
  useDeleteMonthMutation,
  useUpdateMonthInfoMutation,
  useUpdateMonthMutation,
} from "../../services/apiSliceMonths";
import { alert } from "../../utils/alertHelpers";
import {
  ModelMonthPattern,
  monthPattern,
} from "../sidebar/someData/dataSidebarMonthForm";
import useValidationMonthForm from "./useValidationMonthForm";
import * as yup from "yup";

interface ModelFormValues {
  monthDate: string;
}

const useFormikMonth = () => {
  const navigate = useNavigate();
  const [updateMonth, success] = useUpdateMonthMutation();
  const [updateMonthInfo] = useUpdateMonthInfoMutation();
  const [deleteMonth] = useDeleteMonthMutation();
  const { infoMonths } = useSelector((state: RootState) => state.infoMonths);
  const { validationSchema } = useValidationMonthForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const initialValues = { monthDate: `${currYearDigits}-${currMonthDigits}` };

  const validation = validationSchema as yup.ObjectSchema<typeof initialValues>;

  const executeAddMonthInfo = async (values: any) => {
    if (isSuccess) {
      const year = values.monthDate.slice(0, 4);
      const month = values.monthDate.slice(-2);
      const months = infoMonths ? infoMonths : [];
      await updateMonthInfo([...months, `${year}-${month}`]);
      navigate(`/${values.monthDate}`);
    } else if (success.isError) {
      const year = values.monthDate.slice(0, 4);
      const month = values.monthDate.slice(-2);
      await deleteMonth({ year, month });
      alert("");
    }
  };

  const onSubmit = async (values: any) => {
    const year = values.monthDate.slice(0, 4);
    const month = values.monthDate.slice(-2);
    const monthBody: ModelMonthPattern = {
      ...monthPattern,
      id: values.monthDate,
    };

    await updateMonth({ year, month, monthBody });
    executeAddMonthInfo(values);
  };

  useEffect(() => {
    if (success.isSuccess) {
      setIsSuccess(true);
    } else setIsSuccess(false);
  }, [success.isSuccess]);

  // useEffect(() => {
  //   const executeAddMonthInfo = async (values:any) => {
  //     if (isSuccess) {
  //       const year = values.monthDate.slice(0, 4);
  //       const month = values.monthDate.slice(-2);
  //       const months = infoMonths ? infoMonths : [];
  //       await updateMonthInfo([...months, `${year}-${month}`]);
  //       navigate(`/${values.monthDate}`);
  //     } else if (success.isError) {
  //       const year = values.monthDate.slice(0, 4);
  //       const month = values.monthDate.slice(-2);
  //       await deleteMonth({ year, month });
  //       alert("");
  //     }
  //   };

  // }, [isSuccess, updateMonthInfo]);

  return { initialValues, validation, onSubmit, success };
};

export default useFormikMonth;
