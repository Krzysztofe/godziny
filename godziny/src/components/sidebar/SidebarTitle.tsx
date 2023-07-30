import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { auth } from "../../data/firebaseConfig";
import { alert } from "../../utils/alertHelpers";
import useAutoLogout from "../../hooks/useAutoLogout";

const SidebarTitle = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // useAutoLogout();

console.log('ooo',)

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

  let btnContent = <div className="text-start w-100">Wyloguj</div>;

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

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter(prevCounter => prevCounter + 1);
  //   }, 1000); // 1000 ms = 1 second

  //   // Cleanup: clear the interval when the component unmounts to avoid memory leaks
  //   return () => clearInterval(interval);
  // }, []);


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
      {/* <div>
        <h1>Counter: {counter}</h1>
      </div> */}
    </Button>
  );
};

export default SidebarTitle;
