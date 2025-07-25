import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { printAlert } from "../../../redux/storeFeatures/alertSlice";

const useLogout = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setIsLoading(true);

    try {
      localStorage.removeItem("token");
      navigate("/");
    } catch (error: any) {
      dispatch(printAlert("Wylogowanie nieudane"));
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, logout };
};

export default useLogout;
