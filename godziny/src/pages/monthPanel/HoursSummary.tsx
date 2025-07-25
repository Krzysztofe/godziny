import useMonthQuery from "../../hooks/useMonthQuery";

const HoursSummary = () => {
  const { data: month } = useMonthQuery();

  

  return (
    <div className="position-sticky top-0 z-3 fs-2 pt-4 py-md-4 bg-secondary">
      <div className="d-flex mx-auto fw-medium _w-fitContent">
        <div>Wszystkie {month?.hours?.allHours}&nbsp;-&nbsp;</div>

        <div
          className={`${
            month && month?.hours?.currentHours <= 0 ? "text-danger" : ""
          }`}
        >
          <strong>{month && month?.hours?.currentHours }&nbsp;</strong>
          {month && month?.hours?.currentHours <= 0 ? "Brak" : "Dostępne"}
        </div>
      </div>
    </div>
  );
};

export default HoursSummary;
