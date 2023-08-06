import { useSelector } from "react-redux";
import { currMonthDateToString } from "../../../data/dataCurrentDates";
import { RootState } from "../../../redux/store";
import MonthPanelColumns from "../monthPanelColmns/MonthPanelColumns";
import MonthPanelHeader from "../monthPanelHeader/MonthPanelHeader";
import { Spinner } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../../../scss/genericClasses/_container.scss";
import MonthPanelMonthsCollapse from "../MonthPanelMonthsCollapse";
import MonthHoursSummary from "../monthPanelHeader/MonthPanelHeaderSummary";
import useWindowWidth from "../../../hooks/useWindowWidth";

const useHTTPMonthPanel = () => {
  const { infoMonths } = useSelector((state: RootState) => state.infoMonths);
  const { month, error, isLoading } = useSelector(
    (state: RootState) => state.monthsPanel
  );

  const { isOpenCollapseMonths } = useSelector(
    (state: RootState) => state.monthsListCollapse
  );

  const { windowWidth } = useWindowWidth();

  const renderContent = (contentJSX: React.ReactNode) => (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <div className="fs-3 text-white text-center ">{contentJSX}</div>
    </div>
  );

  let panelContent;

  if (isLoading) {
    panelContent = renderContent(
      <Spinner animation="border" variant="secondary" className="fs-6">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (error) {
    if ("status" in error) {
      const errMsg = "status" in error && error.status;

      panelContent = renderContent(
        <div className="text-danger text-center ">
          <> Błąd: {errMsg} </>
        </div>
      );
    }
  } else if (!infoMonths || infoMonths?.length === 0) {
    panelContent = renderContent(
      <div>
        Brak miesięcy zapisanych w bazie danych. Zapisz miesiąc za pomocą
        formularza
      </div>
    );
  } else if (!month || month?.id === "") {
    panelContent = renderContent(
      <div>
        Brak danych z miesiąca {currMonthDateToString}. Zapisz miesiąc za pomocą
        formularza
      </div>
    );
  } else {
    const styles = "col-12 col-xxl-9 me-xxl-auto ps-sm-3";

    panelContent = (
      <>
        <Row className={`${styles} mt-1`}>
          <MonthPanelMonthsCollapse />
        </Row>
        <Row
          className={`${styles} d-flex justify-content-center my-2 pe-4 fw-medium`}
        >
          <MonthHoursSummary />
        </Row>
        <Row
          className={`${styles} flex-grow-1`}
          style={{
            maxHeight: isOpenCollapseMonths
              ? windowWidth > 576
                ? "calc(100% - 170px)"
                : "calc(100% - 170px - 35px)"
              : windowWidth > 576
              ? "calc(100% - 90px)"
              : "calc(100% - 90px - 35px)",
            transitionDuration: "350ms",
          }}
        >
          <MonthPanelColumns />
        </Row>
      </>
    );
  }
  return { panelContent };
};

export default useHTTPMonthPanel;
