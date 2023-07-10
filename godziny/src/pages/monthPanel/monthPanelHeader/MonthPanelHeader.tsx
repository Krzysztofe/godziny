import Container from "react-bootstrap/Container";
import MonthPanelHeaderCollapse from "./MonthPanelHeaderCollapse";
import MonthPanelHeaderSummary from "./MonthPanelHeaderSummary";
import Row from "react-bootstrap/Row";

const MonthPanelHeader = () => {
  return (
    <header className="me-3">
      <Container
        fluid
      >
        <Row className="col-sm-8 col-md-9 d-flex justify-content-end me-lg-5 ms-sm-auto px-1">
          <MonthPanelHeaderCollapse />
          <MonthPanelHeaderSummary />
        </Row>
      </Container>
    </header>
  );
};

export default MonthPanelHeader;


