import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SettingsUsersList from "./settingsUsersList/SettingsUsersList";
import SettingsUsersForm from "./settingsUserForm/SettingsUserForm";
import SettingsMonthsList from "./settingsMonthsList/SettingsMonthsList";


const IndexSettings = () => {
  const classStyles =
    "col-sm-8 col-md-9 col-xl-8 col-xxl-8 ms-sm-auto mx-xl-auto px-1 pt-4";

  return (
    <main className="bg-primary-subtle" style={{ minHeight: "100vh" }}>
      <Container fluid>
        <Row className={classStyles}>
          <SettingsUsersForm />
        </Row>
        <Row className={classStyles}>
          <SettingsUsersList />
        </Row>
        <Row className={classStyles}>
          <SettingsMonthsList />
        </Row>
      </Container>
    </main>
  );
};

export default IndexSettings;
