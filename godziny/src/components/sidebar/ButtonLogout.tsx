import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { TbUser } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../data/firebaseConfig";
import { printAlert } from "../../redux/storeFeatures/alertSlice";

import { useDispatch } from "react-redux";
import AlertErrors from "../AlertErrors";

const ButtonLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();

  const printLogout = pathname !== "/";

  const logout = () => {
    setIsLoading(true);
    auth
      .signOut()
      .then(() => {
        navigate("/");
      })

      .catch(error => dispatch(printAlert(error.message)))
      .finally(() => {
        setIsLoading(false);
      });
  };

  let btnContent = (
    <div className=" d-flex align-items-center text-light-emphasis w-100">
      <TbUser className="fs-2 " />
      <span className="d-none d-sm-block"> Wyloguj </span>
    </div>
  );

  if (isLoading) {
    btnContent = (
      <Spinner
        animation="border"
        size="sm"
        variant="secondary"
        className="mx-auto"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <AlertErrors />
      <Button
        onClick={logout}
        className={`bg-transparent border-0 p-0 ms-2 me-3 ${
          printLogout ? "visible" : "invisible"
        }`}
        disabled={isLoading}
      >
        {btnContent}
      </Button>
    </>
  );
};

export default ButtonLogout;
