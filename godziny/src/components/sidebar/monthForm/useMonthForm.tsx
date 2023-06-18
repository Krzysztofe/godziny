import React from "react";
import { useFormik } from "formik";
import { monthPattern } from "./dataMonthForm";
import { useAddMonthMutation } from "../../../services/apiSlice";

interface ModelFormValues {
  monthYear: string;
}

const useMonthForm = () => {
  const [addMonth, success] = useAddMonthMutation();
  const date = new Date();

  const currYearNum = new Intl.DateTimeFormat("pl", {
    year: "numeric",
  }).format(date);

  const currMonthNum = new Intl.DateTimeFormat("pl", {
    month: "2-digit",
  }).format(date);

  const formik = useFormik<ModelFormValues>({
    initialValues: { monthYear: `${currYearNum}-${currMonthNum}` },

    onSubmit: async values => {
      const monthToPOST = { ...monthPattern, month: values.monthYear };
      await addMonth(monthToPOST);
    },
  });

  return { formik, success };
};

export default useMonthForm;
