import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const HoursSummary = () => {
  const { month } = useSelector((state: RootState) => state.monthPanel);

  return (
    <div className="d-flex mx-auto fw-medium pb-2 _w-fitContent">
      <div>Wszystkie {month?.calcHours?.allHours}&nbsp;-&nbsp;</div>

      <div
        className={`${
          month && month?.calcHours?.currentHours <= 0 ? "text-danger" : ""
        }`}
      >
        <strong>{month && month?.calcHours?.currentHours}</strong> {""}
        {month && month?.calcHours?.currentHours < 0 ? "Brak" : "Dostępne"}
      </div>
    </div>
  );
};

export default HoursSummary;
