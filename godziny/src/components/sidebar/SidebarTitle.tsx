import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../../data/firebaseConfig";
import Button from "react-bootstrap/Button";

const SidebarTitle = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const logout = () => {
    setIsLoading(true);
    auth
      .signOut()
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        Swal.fire({
          title: "Błąd",
          text: error.message,
          confirmButtonColor: "rgb(31, 180, 255)",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  let btnContent;

  if (isLoading) {
    btnContent = (
      <Spinner animation="border" size="sm" variant="secondary" className="mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    btnContent = <div className="text-start w-100">Wyloguj</div>;
  }

  return (
    <Button
      onClick={logout}
      className="fw-bolder text-info p-0 bg-transparent border-0 w-50"
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

export default SidebarTitle;
