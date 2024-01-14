import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import useMonthURLToString from "../../../hooks/useMonthURLToString";
import "./_monthPanelEmpty.scss";

const MonthPanelEmpty = () => {
  const { monthURLStringFormat } = useMonthURLToString();

  return (
    <div className="_d-center fs-2 text-warning text-center _monthPanelEmpty">
      Brak danych z miesiąca {monthURLStringFormat}. Zapisz miesiąc w
      ustawieniach.
    </div>
  );
};

export default MonthPanelEmpty;
