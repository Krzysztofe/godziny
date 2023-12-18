import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currMonthDigits, currYearDigits } from "../../data/dataCurrentDates";
import { auth } from "../../data/firebaseConfig";
import { printAlert } from "../../redux/storeFeatures/alertSlice";

type initialValues = {
  password: string;
};

const useFormikLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = { password: "wwwwww" };

  const onSubmit = (values: initialValues) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, "ww@wp.pl", values.password)
      .then(() => {
        navigate(`/${currYearDigits}-${currMonthDigits}`);
        setIsLoading(false);
      })

      .catch(error => dispatch(printAlert(error.message)))

      .finally(() => {
        setIsLoading(false);
      });
  };

  return { initialValues, onSubmit, isLoading };
};

export default useFormikLogin;
