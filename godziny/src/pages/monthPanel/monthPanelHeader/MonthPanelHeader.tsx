import Container from "react-bootstrap/Container";
import MonthPanelHeaderCollapse from "./MonthPanelHeaderCollapse";
import MonthPanelHeaderSummary from "./MonthPanelHeaderSummary";


const MonthPanelHeader = () => {
  return (
    <header className="me-3">
      <Container className="mx-0 ms-sm-auto ">
        <MonthPanelHeaderCollapse/>
        <MonthPanelHeaderSummary />
      </Container>
    </header>
  );
};

export default MonthPanelHeader;
