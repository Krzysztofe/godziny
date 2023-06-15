import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

interface ModelFormValues {
  password: string;
}

const useLoginForm = () => {
  const validationSchema = yup.object({
    password: yup.string().required("Podaj hasło").min(3, "Hasło min. 3 znaki"),
  });

  const formik = useFormik<ModelFormValues>({
    initialValues: { password: "" },
    validationSchema: validationSchema,
    onSubmit:  values => {

    },
  });

  return { formik };
};

export default useLoginForm;
