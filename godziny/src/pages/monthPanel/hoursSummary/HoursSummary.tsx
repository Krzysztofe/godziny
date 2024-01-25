import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import CurrentMonthPrint from "./CurrentMonthPrint";

const HoursSummary = () => {
  const { month } = useSelector((state: RootState) => state.monthPanel);

  return (
    <div className="position-sticky top-0 z-3 fs-2 py-4 bg-secondary">
      <div className="d-flex mx-auto fw-medium _w-fitContent">
        <div>Wszystkie {month?.calcHours?.allHours}&nbsp;-&nbsp;</div>

        <div
          className={`${
            month && month?.calcHours?.currentHours <= 0 ? "text-danger" : ""
          }`}
        >
          <strong>{month && month?.calcHours?.currentHours}&nbsp;</strong>
          {month && month?.calcHours?.currentHours <= 0 ? "Brak" : "Dostępne"}
        </div>
      </div>
      <CurrentMonthPrint />
    </div>
  );
};

export default HoursSummary;
