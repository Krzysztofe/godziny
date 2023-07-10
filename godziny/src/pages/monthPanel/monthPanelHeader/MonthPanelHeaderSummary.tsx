import useMonthURLToString from "../../../hooks/useMonthURLToString";
import useURLValues from "../../../hooks/useURLValues";
import { useCalcDataQuery } from "../../../services/apiSlice";

const MonthPanelHeaderSummary = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataCalc } = useCalcDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });
  const { monthURLStringFormat } = useMonthURLToString();

  return (
    <>
      <div className="text-capitalize fw-medium mt-2 text-center d-md-none">
        {monthURLStringFormat}
      </div>

      <div className=" d-flex justify-content-center my-2 fw-medium position-relative">
        <div className="text-capitalize fw-medium d-none d-md-block  position-absolute end-0">
          {monthURLStringFormat}
        </div>

        <div className="col-3 text-end">Wszystkie</div>
        <div className="mx-2">
          {dataCalc?.allHours} -{" "}
          <span
            className={`${dataCalc?.currentHours < 0 ? "text-danger" : ""}`}
          >
            {dataCalc?.currentHours}
          </span>
        </div>
        <div
          className={`col-3 ${dataCalc?.currentHours < 0 ? "text-danger" : ""}`}
        >
          {dataCalc?.currentHours < 0 ? "Brak" : "Dostępne"}
        </div>
      </div>
    </>
  );
};

export default MonthPanelHeaderSummary;
