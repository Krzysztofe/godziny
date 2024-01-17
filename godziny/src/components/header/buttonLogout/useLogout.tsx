import { useState } from "react";
import { auth } from "../../../data/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { printAlert } from "../../../redux/storeFeatures/alertSlice";

const useLogout = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setIsLoading(true);
    auth
      .signOut()
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        dispatch(printAlert(error.message));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, logout };
};

export default useLogout;
