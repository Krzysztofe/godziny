import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  currMonthDigits,
  currYearDigits,
} from "../../../data/dataCurrentDates";
import { auth } from "../../../data/firebaseConfig";
import { printAlert } from "../../../redux/storeFeatures/alertSlice";

type InitialValues = {
  password: string;
};

const useFormikLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = { password: "wwwwww" };

  const onSubmit = async (values: InitialValues) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, "ww@wp.pl", values.password);
      navigate(`/${currYearDigits}-${currMonthDigits}`);
    } catch (error: any) {
      dispatch(printAlert(error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return { initialValues, onSubmit, isLoading };
};

export default useFormikLogin;
