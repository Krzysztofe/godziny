import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import firebase from "firebase/app";
import {
  createUserWithEmailAndPassword,
  setPersistence,

} from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "../../data/firebaseConfig";
import { registerValidationSchema } from "./validationRegister";

interface ModelFormValues {
  email: string;
  password: string;
  passwordRepeated: string;
}

const useRegisterFormik = () => {
  const [isLoading, setIsLoading] = useState(false);
  // ww@wp.pl
  // wwwwww;
  //  ee@wp.pl
  //  eeeeee

  const formik = useFormik<ModelFormValues>({
    initialValues: { email: "", password: "", passwordRepeated: "" },
    validationSchema: registerValidationSchema,
    onSubmit: async values => {
      setIsLoading(true);
      const { email, password } = values;

      try {
        await createUserWithEmailAndPassword(auth, email, password);

        // await setPersistence(auth, firebase.auth.Auth.Persistence.NONE);
        setIsLoading(false);

        Swal.fire({
          title: "Rejestracja zakończona",
          text: "Możesz teraz zalogować się używając swojego konta.",
          icon: "success",
          confirmButtonColor: "rgb(31, 180, 255)",
        });
      } catch (error) {
        Swal.fire({
          title: "Błąd",
          text: "error.message",
          confirmButtonColor: "rgb(31, 180, 255)",
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  return { formik, isLoading };
};

export default useRegisterFormik;
