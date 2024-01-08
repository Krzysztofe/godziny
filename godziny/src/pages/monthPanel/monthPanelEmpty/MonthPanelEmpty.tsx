import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import useMonthURLToString from "../../../hooks/useMonthURLToString";
import "./_monthPanelEmpty.scss";

const MonthPanelEmpty = () => {
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const { monthURLStringFormat } = useMonthURLToString();

  if (!month || month?.id === "") {
    return (
      <div className="_d-center fs-3 text-warning text-center _monthPanelEmpty">
        Brak danych z miesiąca {monthURLStringFormat}. Zapisz miesiąc w
        ustawieniach.
      </div>
    );
  } else return null;
};

export default MonthPanelEmpty;
