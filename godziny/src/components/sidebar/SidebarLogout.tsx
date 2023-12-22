import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { auth } from "../../data/firebaseConfig";
import { printAlert } from "../../redux/storeFeatures/alertSlice";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import AlertErrors from "../AlertErrors";

const SidebarLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const logout = () => {
    setIsLoading(true);
    auth
      .signOut()
      .then(() => {
        navigate("/godziny");
      })

      .catch(error => dispatch(printAlert(error.message)))
      .finally(() => {
        setIsLoading(false);
      });
  };

  let btnContent = (
    <div className="d-flex align-center  d-flex align-items-center text-primary w-100">
      <RiLogoutBoxLine className="fs-6 me-1 " />
      Wyloguj
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
        className="fs-6 fw-medium text-info p-0 bg-transparent border-0 w-100"
        style={{
          cursor: "pointer",
        }}
        disabled={isLoading}
      >
        {btnContent}
      </Button>
    </>
  );
};

export default SidebarLogout;
