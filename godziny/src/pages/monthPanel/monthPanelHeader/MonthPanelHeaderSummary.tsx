import { useSelector } from "react-redux";
import useMonthURLToString from "../../../hooks/useMonthURLToString";
import { RootState } from "../../../redux/store";

const MonthPanelHeaderSummary = () => {
  const { month } = useSelector((state: RootState) => state.hoursPanel);
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
          {month?.calc?.allHours} -{" "}
          <span
            className={`${month?.calc?.currentHours < 0 ? "text-danger" : ""}`}
          >
            {month?.calc?.currentHours}
          </span>
        </div>
        <div
          className={`col-3 ${
            month?.calc?.currentHours < 0 ? "text-danger" : ""
          }`}
        >
          {month?.calc?.currentHours < 0 ? "Brak" : "Dostępne"}
        </div>
      </div>
    </>
  );
};

export default MonthPanelHeaderSummary;
