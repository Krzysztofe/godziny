import Container from "react-bootstrap/Container";
import MonthPanelHeaderSummary from "./MonthPanelHeaderSummary";
import FormHeaderMonhPanel from "./formHeaderMonthPanel/FormHeaderMonhPanel";
import MonthPanelHeaderCollapse from "./MonthPanelHeaderCollapse";


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
