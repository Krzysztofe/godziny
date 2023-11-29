import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { currMonthDateToString } from "../../../data/dataCurrentDates";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { RootState } from "../../../redux/store";
import { printPanelContent } from "../../../utils/printPanelContent";
import MonthPanelColumns from "../monthPanelColmns/MonthPanelColumns";
import useMonthURLToString from "../../../hooks/useMonthURLToString";

const useHTTPMonthPanel = () => {
  const { month, error, isLoading } = useSelector(
    (state: RootState) => state.monthsPanel
  );

  const { monthURLStringFormat } = useMonthURLToString();


  let monthContent;

  if (isLoading) {
   monthContent = printPanelContent(
      <Spinner animation="border" variant="secondary" className="fs-6">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (error) {
    if ("status" in error) {
      const errMsg = "status" in error && error.status;

     monthContent = printPanelContent(
        <div className="text-danger text-center ">
          <> Błąd: {errMsg} </>
        </div>
      );
    }
  } 
    
  else if (!month || month?.id === "") {
   monthContent = printPanelContent(
     <div>
       Brak danych z miesiąca {monthURLStringFormat}. Zapisz miesiąc w ustawieniach.
     </div>
   );
  } else {
   monthContent = (
      <>
        {/* <Row className={`${styles} mt-1`}>
          <MonthPanelMonthsCollapse />
        </Row>
        <Row
          className={`${styles} d-flex justify-content-center my-2 pe-4 fw-medium`}
        >
          <MonthHoursSummary />
        </Row> */}
        <div
          style={{
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          <MonthPanelColumns />
        </div>
      </>
    );
  }
  return { monthContent };
};

export default useHTTPMonthPanel;
