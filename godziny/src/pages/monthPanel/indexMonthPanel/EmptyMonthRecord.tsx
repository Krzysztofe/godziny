import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import useMonthURLToString from "../../../hooks/useMonthURLToString";

const EmptyMonthRecord = () => {
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const { monthURLStringFormat } = useMonthURLToString();

  if (!month || month?.id === "") {
    return (
      <div
        className="d-center fs-3 text-warning text-center"
        style={{
          maxWidth: "1000px",
          width: "100%",
          height: "100%",
        }}
      >
        Brak danych z miesiąca {monthURLStringFormat}. Zapisz miesiąc w
        ustawieniach.
      </div>
    );
  } else return null;
};

export default EmptyMonthRecord;
