import Container from "react-bootstrap/Container";
import MonthPanelHeaderCollapse from "./MonthPanelHeaderCollapse";
import MonthPanelHeaderSummary from "./MonthPanelHeaderSummary";
import Row from "react-bootstrap/Row";
import SidebarMonthCollapse from "../../../components/sidebar/SidebarMonthCollapse";

const MonthPanelHeader = () => {
  return (
    <header className="me-3">
      <Container fluid>
        <Row className="col-sm-8 col-md-9 col-xl-8 col-xxl-8 ms-sm-auto mx-xl-auto px-1 ">
          <SidebarMonthCollapse />
          <MonthPanelHeaderSummary />
        </Row>
      </Container>
    </header>
  );
};

export default MonthPanelHeader;
