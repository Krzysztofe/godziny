import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useURLValues from "../../hooks/useURLValues";
import { useMonthDataQuery } from "../../services/apiSliceMonths";
import useMonthQuery from "../../hooks/useMonthQuery";

const HoursSummary = () => {
  // const { month } = useSelector((state: RootState) => state.monthPanel);

  const { data: month } = useMonthQuery();

 

  return (
    <div className="position-sticky top-0 z-3 fs-2 pt-4 py-md-4 bg-secondary">
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
    </div>
  );
};

export default HoursSummary;
