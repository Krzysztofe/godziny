import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const HoursSummary = () => {
  const { month } = useSelector((state: RootState) => state.monthsPanel);

  return (
    <div className="d-flex gap-2 mx-auto fw-medium pb-2 w-fit-content">
      <div>Wszystkie</div>
      <div>
        {month?.calcHours?.allHours} -{" "}
        <span
          className={`${
            month?.calcHours?.currentHours <= 0 ? "text-danger" : ""
          }`}
        >
          {month?.calcHours?.currentHours}
        </span>
      </div>
      <div
        className={` ${
          month?.calcHours?.currentHours <= 0 ? "text-danger" : ""
        }`}
      >
        {month?.calcHours?.currentHours < 0 ? "Brak" : "Dostępne"}
      </div>
    </div>
  );
};

export default HoursSummary;
