import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import UserSettings from "./settingsUserForm/SettingsUserForm";

const IndexSettings = () => {



  return (
    <main>
      <Container fluid>
        <Row className="col-sm-8 col-md-9 col-xl-8 col-xxl-8 ms-sm-auto mx-xl-auto px-1 ">
         <UserSettings/>
        </Row>
      </Container>
    </main>
  );
};

export default IndexSettings;
