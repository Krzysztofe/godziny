import { Spinner } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import SettingsMonthsList from "../settingsMonthsList/SettingsMonthsList";
import SettingsUserForm from "../settingsUserForm/SettingsUserForm";
import SettingsUsersList from "../settingsUsersList/SettingsUsersList";
import SettingsReturnButton from "../SettingsReturnButton";
import Col from "react-bootstrap/Col";

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
    const rowStyles = "col-12 bg-white px-3";
    const colStyles =
      "col-12 col-md-9 col-lg-6 col-xl-5 col-xxl-4  py-4 ps-4 ps-md-5 me-md-auto border-bottom ";

    settingsContent = (
      <>
        <Row className={rowStyles}>
          <Col className={colStyles}>
            <SettingsReturnButton />
          </Col>
        </Row>
        <Row className={rowStyles}>
          <Col className={colStyles}>
            <SettingsUserForm />
          </Col>
        </Row>
        <Row className={rowStyles}>
          <Col className={colStyles}>
            <SettingsUsersList />
          </Col>
        </Row>
        <Row className={`${rowStyles} flex-grow-1`}>
          <Col className={colStyles}>
            <SettingsMonthsList />
          </Col>
        </Row>
      </>
    );
  }

  return { settingsContent };
};
export default useHTTPIndexSettings;
