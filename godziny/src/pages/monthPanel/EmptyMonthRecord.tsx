import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { printPanelContent } from "../../utils/printPanelContent";
import useMonthURLToString from "../../hooks/useMonthURLToString";

const EmptyMonthRecord = () => {
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const { monthURLStringFormat } = useMonthURLToString();

  if (!month || month?.id === "") {
    return (
      <>
        {printPanelContent(
          <div>
            Brak danych z miesiąca {monthURLStringFormat}. Zapisz miesiąc w
            ustawieniach.
          </div>
        )}
      </>
    );
  } else return null;
};

export default EmptyMonthRecord;
