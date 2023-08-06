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

  const cc = true;
  let settingsContent;

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
    const styles = "col-12 bg-white";

    settingsContent = (
      <>
        <Row className={styles}>
          <SettingsUserForm />
        </Row>
        <Row className={styles}>
          <SettingsUsersList />
        </Row>
        <Row className={`${styles} flex-grow-1 d-block`}
        style = {{maxHeight:"20%"}}
        >
          <SettingsMonthsList />
        </Row>
      </>
    );
  }

  return { settingsContent };
};
export default useHTTPIndexSettings;
