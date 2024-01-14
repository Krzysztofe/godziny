import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CurrentMonth from "./CurrentMonth";

const HoursSummary = () => {
  const { month } = useSelector((state: RootState) => state.monthPanel);

  return (
    <div className="position-sticky z-3 fs-2 top-0 py-2 bg-secondary">
      <div className="d-flex mx-auto fw-medium _w-fitContent">
        <div>Wszystkie {month?.calcHours?.allHours}&nbsp;-&nbsp;</div>

        <div
          className={`${
            month && month?.calcHours?.currentHours <= 0 ? "text-danger" : ""
          }`}
        >
          <strong>{month && month?.calcHours?.currentHours}</strong> {""}
          {month && month?.calcHours?.currentHours <= 0 ? "Brak" : "Dostępne"}
        </div>
      </div>
      <CurrentMonth />
    </div>
  );
};

export default HoursSummary;
