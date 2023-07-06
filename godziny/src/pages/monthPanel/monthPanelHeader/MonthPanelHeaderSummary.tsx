import useMonthURLToString from "../../../hooks/useMonthURLToString";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { useParams } from "react-router-dom";
import { useCalcDataQuery } from "../../../services/apiSlice";
import useURLValues from "../../../hooks/useURLValues";

const MonthPanelHeaderSummary = () => {
  // const { monthURL } = useParams();
  const { monthURL, yearFromURL, monthFromURL } = useURLValues();
  const { databaseAllHours, dataCurrentHours } = useDatabaseValues(monthURL);
  const { monthURLStringFormat } = useMonthURLToString();

  const { data: dataCalc } = useCalcDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

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
          {dataCalc.allHours} -{" "}
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
