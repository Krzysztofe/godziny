import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CollapseContainer from "../../components/collapseContainer/CollapseContainer";
import ListMonthsInCollapse from "../../components/sidebar/listMonthsInCollapse/ListMonthsInCollapse";
import useMonthURLToString from "../../hooks/useMonthURLToString";

const HoursSummary = () => {
  const { month } = useSelector((state: RootState) => state.monthPanel);

  const { monthURLStringFormat } = useMonthURLToString();
  const monthStringCapitalize =
    monthURLStringFormat[0]?.toUpperCase() + monthURLStringFormat.slice(1);

  return (
    <div className="position-sticky z-3 fs-2 top-0 py-4 bg-secondary">
      <div className="d-flex mx-auto fw-medium pb-2 _w-fitContent">
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
      <div className="text-center fs-4 d-md-none">
        {" "}
        {monthStringCapitalize}{" "}
      </div>
    </div>
  );
};

export default HoursSummary;
