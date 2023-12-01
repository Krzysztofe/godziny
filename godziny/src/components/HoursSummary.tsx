import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const HoursSummary = () => {
  const { month } = useSelector((state: RootState) => state.monthsPanel);

  return (
    <div
      className="d-flex gap-2 mx-auto fw-medium pb-2"
      style={{ width: "fit-content" }}
    >
      <div>Wszystkie</div>
      <div>
        {month?.calc?.allHours} -{" "}
        <span
          className={`${month?.calc?.currentHours <= 0 ? "text-danger" : ""}`}
        >
          {month?.calc?.currentHours}
        </span>
      </div>
      {/* <div
        className={` ${month?.calc?.currentHours <= 0 ? "text-danger" : ""}`}
      >
        {month?.calc?.currentHours < 0 ? "Brak" : "Dostępne"}
      </div> */}
    </div>
  );
};

export default HoursSummary;
