import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  currMonthDigits,
  currYearDigits,
} from "../../../data/dataCurrentDates";
import { printAlert } from "../../../redux/storeFeatures/alertSlice";
import { useLoginAdminMutation } from "../../../services/apiSliceLogin";

type InitialValues = {
  adminPassword: string;
  adminEmail: string;
};

const useFormikLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginAdmin, success] = useLoginAdminMutation();

  const initialValues = { adminPassword: "password", adminEmail: "aaax@wp.pl" };

  const onSubmit = async (values: InitialValues) => {
    setIsLoading(true);

    try {
      const resp = await loginAdmin(values).unwrap();

      localStorage.setItem("token", resp.token);

      navigate(`/${currYearDigits}-${currMonthDigits}`);
    } catch (error: any) {
      console.error("Login failed:", error);
      dispatch(printAlert("Złe hasło lub login"));
    } finally {
      setIsLoading(false);
    }
  };

  return { initialValues, onSubmit, isLoading };
};

export default useFormikLogin;
