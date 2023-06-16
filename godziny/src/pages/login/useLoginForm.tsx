import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../data/firebaseConfig";
import { useNavigate } from "react-router-dom";

interface ModelFormValues {
  password: string;
}

const useLoginForm = () => {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    password: yup.string().required("Podaj hasło").min(3, "Hasło min. 3 znaki"),
  });
  const [error, setError] = useState<string | null>(null);
  // ww@wp.pl
  // wwwwww;

  const formik = useFormik<ModelFormValues>({
    initialValues: { password: "wwwwww" },
    validationSchema: validationSchema,

    onSubmit: values => {
      signInWithEmailAndPassword(auth, "ww@wp.pl", values.password)
        .then(() => navigate("/miesiac/2023-06"))

        .catch(error => setError(error.message));
    },
  });

  return { formik, error };
};

export default useLoginForm;
