import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFirebaseConfig from "../../../hooks/useFirebaseConfig";
import { printAlert } from "../../../redux/storeFeatures/alertSlice";

const useLogout = () => {
  const { auth } = useFirebaseConfig();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    setIsLoading(true);

    try {
      await auth?.signOut();
      navigate("/");
    } catch (error: any) {
      dispatch(printAlert(error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, logout };
};

export default useLogout;
