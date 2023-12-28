import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import useMonthURLToString from "../../../hooks/useMonthURLToString";
import { RootState } from "../../../redux/store";
import {
  printPanelContent,
  printPanelLoadingContent,
} from "../../../utils/printPanelContent";
import MonthPanelContent from "./MonthPanelContent";

const useRequestMonthPanel = () => {
  const { month, error, isLoading } = useSelector(
    (state: RootState) => state.monthPanel
  );
  const { listUsersError, listUsersIsLoading } = useSelector(
    (state: RootState) => state.listUsers
  );
  const { listMonthsError } = useSelector(
    (state: RootState) => state.listMonths
  );

  const { monthURLStringFormat } = useMonthURLToString();

  let requestState;

  if (isLoading || listUsersIsLoading) {
    requestState = printPanelLoadingContent(
      <Spinner animation="border" variant="secondary" className="fs-6">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (error || listUsersError || listMonthsError) {
    requestState = printPanelLoadingContent(
      <div className="text-danger text-center fs-4 ">Błąd. Odśwież stronę</div>
    );
  } else if (!month || month?.id === "") {
    requestState = printPanelContent(
      <div>
        Brak danych z miesiąca {monthURLStringFormat}. Zapisz miesiąc w
        ustawieniach.
      </div>
    );
  } else {
    requestState = <MonthPanelContent />;
  }
  return { requestState };
};

export default useRequestMonthPanel;
