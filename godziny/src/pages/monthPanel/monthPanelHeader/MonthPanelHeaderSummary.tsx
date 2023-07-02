import useMonthURLToString from "../../../hooks/useMonthURLToString";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { useParams } from "react-router-dom";

const MonthPanelHeaderSummary = () => {
  const { monthURL } = useParams();
  const { databaseAllHours, dataCurrentHours } = useDatabaseValues(monthURL);
  const { monthURLStringFormat } = useMonthURLToString();

  return (
    <>
      <div className="text-capitalize fw-medium mt-2 text-center d-sm-none">
        {monthURLStringFormat}
      </div>

      <div className=" d-flex justify-content-center my-2 fw-medium position-relative">
        <div className="text-capitalize fw-medium d-none d-sm-block  position-absolute end-0">
          {monthURLStringFormat}
        </div>

        <div className="col-3 text-end">Wszystkie</div>
        <div className="mx-2">
          {databaseAllHours} -{" "}
          <span className={`${dataCurrentHours < 0 ? "text-danger" : ""}`}>
            {dataCurrentHours}
          </span>
        </div>
        <div className={`col-3 ${dataCurrentHours < 0 ? "text-danger" : ""}`}>
          {dataCurrentHours < 0 ? "Brak" : "Dostępne"}
        </div>
      </div>
    </>
  );
};

export default MonthPanelHeaderSummary;
