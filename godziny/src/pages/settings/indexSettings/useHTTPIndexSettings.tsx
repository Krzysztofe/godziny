import { Spinner } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import SettingsMonthsList from "../settingsMonthsList/SettingsMonthsList";
import SettingsUserForm from "../settingsUserForm/SettingsUserForm";
import SettingsUsersList from "../settingsUsersList/SettingsUsersList";

const useHTTPIndexSettings = () => {
 

  const { users, usersError, usersIsLoading } = useSelector(
    (state: RootState) => state.users
  );

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
 

  if (usersIsLoading) {
    settingsContent = (
      <Spinner animation="border" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (usersError) {
    if ("status" in usersError) {
      const errMsg = "status" in usersError && usersError.status;

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
