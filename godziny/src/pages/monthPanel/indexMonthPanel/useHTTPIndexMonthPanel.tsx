import { useSelector } from "react-redux";
import { currMonthDateToString } from "../../../data/dataCurrentDates";
import { RootState } from "../../../redux/store";
import MonthPanelColumns from "../monthPanelColmns/MonthPanelColumns";
import MonthPanelHeader from "../monthPanelHeader/MonthPanelHeader";
import { Spinner } from "react-bootstrap";

const useHTTPMonthPanel = () => {
  const { infoMonths } = useSelector((state: RootState) => state.infoMonths);
  const { month, error, isLoading } = useSelector(
    (state: RootState) => state.monthsPanel
  );


  let panelContent 

  if (isLoading) {
    panelContent = (
      <Spinner animation="border" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (error) {
    if ("status" in error) {
      const errMsg = "status" in error && error.status;

      panelContent = (
        <h3 className="text-danger mx-auto ">
          <> Błąd: {errMsg} </>
        </h3>
      );
    }
  } else if (!infoMonths || infoMonths?.length === 0) {
    panelContent = (
      <h5 className="text-warning">
        Brak miesięcy zapisanych w bazie danych. Zapisz miesiąc za pomocą
        formularza
      </h5>
    );
  } else if (!month || month?.id==="") {
    panelContent = (
      <h3 className="text-warning">
        Brak danych z miesiąca {currMonthDateToString}. Zapisz miesiąc za pomocą
        formularza
      </h3>
    );
  } else {
    panelContent = (
      <>
        <MonthPanelHeader />
        <MonthPanelColumns />
      </>
    );
  }

  return { panelContent };
};

export default useHTTPMonthPanel;
