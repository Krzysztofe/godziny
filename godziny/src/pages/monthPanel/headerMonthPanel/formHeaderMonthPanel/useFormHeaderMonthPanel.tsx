import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateMonthMutation } from "../../../../services/apiSlice";
import useDataBaseValues from "../../useDataBaseValues";
import { RootState } from "../../../../redux/store";
import { useParams, useLocation } from "react-router-dom";
import { validationSchema } from "./validationFormHeaderMonthPanel";

interface ModelFormValues {
  allHours: number;
}

const useFormHeaderMonhPanel = () => {
  const { monthURL } = useParams();
  const [updateColumns, success] = useUpdateMonthMutation();
  const { databaseMonth, data } = useDataBaseValues(monthURL);

  const formik = useFormik<ModelFormValues>({
    initialValues: { allHours: 0 },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await updateColumns({
        id: data && databaseMonth?.id,
        columns: {
          ...databaseMonth,
          allHours: values.allHours,
        },
      });
      //  resetForm();
    },
  });

  return { formik, success };
};

export default useFormHeaderMonhPanel;
