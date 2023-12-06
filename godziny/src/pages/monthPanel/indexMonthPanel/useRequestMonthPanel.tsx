import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import useMonthURLToString from "../../../hooks/useMonthURLToString";
import { RootState } from "../../../redux/store";
import { printPanelContent } from "../../../utils/printPanelContent";
import MonthPanelContent from "./MonthPanelContent";

const useRequestMonthPanel = () => {
  const { month, error, isLoading } = useSelector(
    (state: RootState) => state.monthPanel
  );

  const { monthURLStringFormat } = useMonthURLToString();

  let requestState;

  if (isLoading) {
    requestState = printPanelContent(
      <Spinner animation="border" variant="secondary" className="fs-6">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (error) {
    if ("status" in error) {
      const errMsg = "status" in error && error.status;

      requestState = printPanelContent(
        <div className="text-danger text-center ">
          <> Błąd: {errMsg} </> <br />
          <>Odśwież stronę</>
        </div>
      );
    }
  } else if (!month || month?.id === "") {
    requestState = printPanelContent(
      <div>
        Brak danych z miesiąca {monthURLStringFormat}. Zapisz miesiąc w
        ustawieniach.
      </div>
    );
  }
  else {
    requestState = (
      <>
        <MonthPanelContent />
      </>
    );
  }
  return { requestState };
};

export default useRequestMonthPanel;
