import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { currMonthDigits, currYearDigits } from "../../data/dataCurrentDates";
import { auth } from "../../data/firebaseConfig";
import { alert } from "../../utils/alertHelpers";

interface ModelFormValues {
  password: string;
}

const useLoginFormik = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
 
  const formik = useFormik<ModelFormValues>({
    initialValues: { password: "wwwwww" },

    onSubmit: values => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, "ww@wp.pl", values.password)
        .then(() => {
          navigate(`/${currYearDigits}-${currMonthDigits}`);
          setIsLoading(false);
        })
        .catch(error => alert(error.message))
        .finally(() => {
          setIsLoading(false);
        });
    },
  });

  return { formik, isLoading };
};

export default useLoginFormik;
