import { useSelector } from "react-redux";
import useMonthURLToString from "../../../hooks/useMonthURLToString";
import { RootState } from "../../../redux/store";
// import SidebarMonthCollapse from "../../../components/collapseMonths/CollapseMonths";
import useWindowWidth from "../../../hooks/useWindowWidth";
import Col from "react-bootstrap/Col";

const MonthHoursSummary = () => {
  const { month } = useSelector((state: RootState) => state.monthsPanel);
  const { monthURLStringFormat } = useMonthURLToString();

  const { windowWidth } = useWindowWidth();

  const styles = "col-4 col-xxl-3 p-0";

  return (
    <>
      <Col className={`${styles} text-end`}>Wszystkie</Col>
      <Col className="col-4 col-md-2 col-xxl-1 p-0 text-center">
        {month?.calc?.allHours} -{" "}
        <span
          className={`${month?.calc?.currentHours <= 0 ? "text-danger" : ""}`}
        >
          {month?.calc?.currentHours}
        </span>
      </Col>
      <Col
        className={`${styles} ${
          month?.calc?.currentHours <= 0 ? "text-danger" : ""
        }`}
      >
        {month?.calc?.currentHours < 0 ? "Brak" : "Dostępne"}
      </Col>
    </>
  );
};

export default MonthHoursSummary;
