import useMonthURLToString from "../../../hooks/useMonthURLToString";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { useParams } from "react-router-dom";

const MonthPanelHeaderSummary = () => {
  const { monthURL } = useParams();
  const { databaseAllHours, dataCurrentHours } = useDatabaseValues(monthURL);
  const { monthURLStringFormat } = useMonthURLToString();

  return (
    <div className="d-flex justify-content-center my-2 fw-medium position-relative">
      <div className="text-capitalize position-absolute end-0">
        {monthURLStringFormat}
      </div>
      <div className="text-end" style={{ width: "25%" }}>
        Wszystkie
      </div>
      <div className="text-center mx-2" style={{}}>
        {databaseAllHours} - {dataCurrentHours}
      </div>
      <div style={{ width: "25%" }}>Wolne</div>
    </div>
  );
};

export default MonthPanelHeaderSummary;
