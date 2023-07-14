import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Spinner } from "react-bootstrap";
import { useUsersQuery } from "../../../services/apiSliceUsers";
import SettingsMonthsList from "../settingsMonthsList/SettingsMonthsList";
import SettingsUsersList from "../settingsUsersList/SettingsUsersList";
import SettingsUserForm from "../settingsUserForm/SettingsUserForm";

const useHTTPIndexSettings = () => {
  const { error, isLoading } = useUsersQuery();

  const rowStyles =
    "col-sm-8 col-md-9 col-xl-8 col-xxl-8 ms-sm-auto mx-xl-auto px-1 pt-4";

  let settingsContent = (
    <Container fluid>
      <Row className={rowStyles}>
        <SettingsUserForm />
      </Row>
      <Row className={rowStyles}>
        <SettingsUsersList />
      </Row>
      <Row className={rowStyles}>
        <SettingsMonthsList />
      </Row>
    </Container>
  );

  if (isLoading) {
    settingsContent = (
      <Spinner animation="border" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    
    );
  } else if (error) {
    if ("status" in error) {
      const errMsg = "status" in error && error.status;

      settingsContent = (
        <h3 className="text-danger col-5">
          <> Błąd: {errMsg} </>
        </h3>
      );
    }
  }

  return { settingsContent };
};
export default useHTTPIndexSettings;
