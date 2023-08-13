import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { auth } from "../../data/firebaseConfig";
import { alert } from "../../utils/alertHelpers";
import { RiLogoutBoxLine } from "react-icons/ri";

const SidebarLogout = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const logout = () => {
    setIsLoading(true);
    auth
      .signOut()
      .then(() => {
        navigate("/");
      })
      .catch(error => alert(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  let btnContent = (
    <div className="d-flex align-center  d-flex align-items-center text-start w-100">
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
    <Button
      onClick={logout}
      className="fs-6 fw-medium text-info p-0 bg-transparent border-0 w-50"
      style={{
        cursor: "pointer",
        fontSize: "0.8rem",
      }}
      disabled={isLoading}
    >
      {btnContent}
    </Button>
  );
};

export default SidebarLogout;
