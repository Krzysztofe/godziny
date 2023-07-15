import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  currMonthDigits,
  currYearDigits,
} from "../../../data/dataCurrentDates";
import { RootState } from "../../../redux/store";
import {
  useAddMonthInfoMutation,
  useAddMonthMutation,
  useDeleteMonthMutation,
} from "../../../services/apiSliceMonths";
import { alert } from "../../../utils/alertHelpers";
import { ModelMonthPattern, monthPattern } from "./dataSidebarMonthForm";
import useValidationSidebarMonthForm from "./useValidationSidebarMonthForm";
interface ModelFormValues {
  monthDate: string;
}

const useSidebarMonthFormik = () => {
  const navigate = useNavigate();
  const [addMonth, success] = useAddMonthMutation();
  const [addMonthInfo, successInfo] = useAddMonthInfoMutation();
  const [deleteMonth] = useDeleteMonthMutation();
  const { infoMonths } = useSelector((state: RootState) => state.infoMonths);
  const { validationSchema } = useValidationSidebarMonthForm();
  const [setned, setSented] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formik = useFormik<ModelFormValues>({
    initialValues: { monthDate: `${currYearDigits}-${currMonthDigits}` },
    validationSchema: validationSchema,

    onSubmit: async values => {
      const year = values.monthDate.slice(0, 4);
      const month = values.monthDate.slice(-2);
      const monthBody: ModelMonthPattern = {
        ...monthPattern,
        id: values.monthDate,
      };

      await addMonth({ year, month, monthBody });
    },
  });

  useEffect(() => {
    if (success.isSuccess) {
      setIsSuccess(true);
    } else setIsSuccess(false);
  }, [success.isSuccess]);

  useEffect(() => {
    const executeAddMonthInfo = async () => {
      if (isSuccess) {
        const year = formik.values.monthDate.slice(0, 4);
        const month = formik.values.monthDate.slice(-2);
        const months = infoMonths ? infoMonths : [];
        await addMonthInfo([...months, `${year}-${month}`]);
        navigate(`/${formik.values.monthDate}`);
      } else if (success.isError) {
        const year = formik.values.monthDate.slice(0, 4);
        const month = formik.values.monthDate.slice(-2);
        await deleteMonth({ year, month });
        alert("");
      }
    };

    executeAddMonthInfo();
  }, [isSuccess, addMonthInfo]);

  return { formik, success };
};

export default useSidebarMonthFormik;
