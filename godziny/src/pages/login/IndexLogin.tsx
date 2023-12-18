import { Spinner } from "react-bootstrap";
import React from "react";
import FormLoginContext from "./FormLoginContext";
import useFormikLogin from "./useFormikLogin";
import Alert from "../../components/alert/Alert";


const IndexLogin = () => {
  const { isLoading } = useFormikLogin();

  let btnContent: string | React.ReactNode = "Zaloguj";

  if (isLoading) {
    btnContent = (
      <Spinner animation="border" size="sm" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <main className="backgroundImage d-flex justify-content-center  align-items-center vh-100 vw-100">
      <Alert />
      <FormLoginContext />
    </main>
  );
};

export default IndexLogin;
