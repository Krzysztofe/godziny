import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const HoursSummary = () => {
  const { month } = useSelector((state: RootState) => state.monthPanel);

  return (
    <div className="d-flex mx-auto fw-medium pb-2 w-fit-content">
      <div>Wszystkie {month?.calcHours?.allHours}&nbsp;-&nbsp;</div>

      <div
        className={`${
          month && month?.calcHours?.currentHours <= 0 ? "text-danger" : ""
        }`}
      >
        {month && month?.calcHours?.currentHours} {""}
        {month && month?.calcHours?.currentHours < 0 ? "Brak" : "Dostępne"}
      </div>
    </div>
  );
};

export default HoursSummary;
