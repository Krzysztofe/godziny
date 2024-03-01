// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   currMonthDigits,
//   currYearDigits,
// } from "../../../data/dataCurrentDates";
// import FirebaseSingleton from "../../../data/firebaseConfig";
// import { printAlert } from "../../../redux/storeFeatures/alertSlice";

// type InitialValues = {
//   password: string;
// };

// const useFormikLogin = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const firebaseInstance = FirebaseSingleton.getInstance();
//   const auth = firebaseInstance.auth;
//   const [isLoading, setIsLoading] = useState(false);

//   const initialValues = { password: "wwwwww" };

//   const onSubmit = async (values: InitialValues) => {
//     setIsLoading(true);
//     try {
//       await signInWithEmailAndPassword(auth!, "ww@wp.pl", values.password);
//       navigate(`/${currYearDigits}-${currMonthDigits}`);
//     } catch (error: any) {
//       dispatch(printAlert(error.message));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { initialValues, onSubmit, isLoading };
// };

// export default useFormikLogin;



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

type InitialValues = {
  password: string;
};

const useFormikLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firebaseInstance = FirebaseSingleton.getInstance();
  const auth = firebaseInstance.auth;
  const [isLoading, setIsLoading] = useState(false);
  const email = "danfoss999@wp.pl";

  const initialValues = { password: "997kazik" };

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