import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  currMonthDigits,
  currYearDigits,
} from "../../../data/dataCurrentDates";
import FirebaseSingleton from "../../../data/firebaseConfig";
import { printAlert } from "../../../redux/storeFeatures/alertSlice";
import useFirebaseConfig from "../../../hooks/useFirebaseConfig";

type InitialValues = {
  password: string;
};

const useFormikLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useFirebaseConfig();
  const [isLoading, setIsLoading] = useState(false);
  const email = "ww@wp.pl";

  const initialValues = { password: "wwwwww" };

  const onSubmit = async (values: InitialValues) => {
    setIsLoading(true);
    try {
      if (email) {
        await signInWithEmailAndPassword(auth!, email, values.password);
        navigate(`/${currYearDigits}-${currMonthDigits}`);
      }
    } catch (error: any) {
      dispatch(printAlert(error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return { initialValues, onSubmit, isLoading };
};

export default useFormikLogin;
