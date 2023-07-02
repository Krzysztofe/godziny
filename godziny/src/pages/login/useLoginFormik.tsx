import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { currMonthDigits, currYearDigits } from "../../data/dataCurrentDates";
import { auth } from "../../data/firebaseConfig";
import Swal from "sweetalert2";

interface ModelFormValues {
  password: string;
}

const useLoginFormik = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // ww@wp.pl
  // wwwwww;

  const formik = useFormik<ModelFormValues>({
    initialValues: { password: "wwwwww" },

    onSubmit: values => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, "ww@wp.pl", values.password)
        .then(() => {
          navigate(`/miesiac/${currYearDigits}-${currMonthDigits}`);
          setIsLoading(false);
        })
        .catch(error =>
          Swal.fire({
            title: "Błąd",
            text: error.message,
            confirmButtonColor: "rgb(31, 180, 255)",
          })
        )
        .finally(() => {
        setIsLoading(false);
      });
    },
  });

  return { formik, isLoading };
};

export default useLoginFormik;
