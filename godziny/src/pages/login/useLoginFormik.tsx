import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../data/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { currYearNumber, currMonthNumber } from "../../data/dataCurrentDates";

interface ModelFormValues {
  password: string;
}

const useLoginFormik = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  // ww@wp.pl
  // wwwwww;

  const formik = useFormik<ModelFormValues>({
    initialValues: { password: "wwwwww" },

    onSubmit: values => {
      signInWithEmailAndPassword(auth, "ww@wp.pl", values.password)
        .then(() => navigate(`/miesiac/${currYearNumber}-${currMonthNumber}`))

        .catch(error => setError(error.message));
    },
  });

  return { formik, error };
};

export default useLoginFormik;
