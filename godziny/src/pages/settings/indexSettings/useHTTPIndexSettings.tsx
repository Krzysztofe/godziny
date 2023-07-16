import { Spinner } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import SettingsMonthsList from "../settingsMonthsList/SettingsMonthsList";
import SettingsUserForm from "../settingsUserForm/SettingsUserForm";
import SettingsUsersList from "../settingsUsersList/SettingsUsersList";

const useHTTPIndexSettings = () => {
  const { usersError, usersIsLoading } = useSelector(
    (state: RootState) => state.users
  );
  const { infoMonthsError, infoMonthsIsLoading } = useSelector(
    (state: RootState) => state.infoMonths
  );

  const rowStyles =
    "col-sm-8 col-md-9 col-xl-8 col-xxl-8 ms-sm-auto mx-xl-auto px-1 pt-4";

     const cc = true;
  let settingsContent 

  if (usersIsLoading || infoMonthsIsLoading) {
    settingsContent = (
      <Spinner animation="border" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (usersError) {
    if ("status" in usersError) {
      const errMsg = "status" in usersError && usersError.status;

      settingsContent = (
        <h3 className="text-danger mx-auto ">
          <> Błąd: {errMsg} </>
        </h3>
      );
    }
  } else if (infoMonthsError) {
    if ("status" in infoMonthsError) {
      const errMsg = "status" in infoMonthsError && infoMonthsError.status;

      settingsContent = (
        <h3 className="text-danger mx-auto ">
          <> Błąd: {errMsg} </>
        </h3>
      );
    }
  } else {
    settingsContent = (
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
  }

  return { settingsContent };
};
export default useHTTPIndexSettings;
