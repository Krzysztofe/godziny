import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Columns from "../colmns/Columns";
import MonthPanelHeader from "../monthPanelHeader/MonthPanelHeader";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { currMonthDateToString } from "../../../data/dataCurrentDates";

const IndexMonthPanel = () => {
  const { monthURL } = useParams();
  const { databaseMonth, data, error, isLoading } = useDatabaseValues(monthURL);

  let panelContent;

  // if (isLoading) {
  //   panelContent = (
  //     <main
  //       className="d-flex justify-content-center align-items-center"
  //       style={{ height: "100vh" }}
  //     >
  //       <Spinner animation="border" variant="secondary">
  //         <span className="visually-hidden">Loading...</span>
  //       </Spinner>
  //     </main>
  //   );
  // } else if (error) {
  //   if ("status" in error) {
  //     const errMsg = "status" in error && error.status;

  //     return (
  //       <main
  //         className="d-flex justify-content-center align-items-center"
  //         style={{ height: "100vh" }}
  //       >
  //         <h3 className="text-danger col-5">
  //           <> Błąd: {errMsg} </>
  //         </h3>
  //       </main>
  //     );
  //   }
  // } else if (!data) {
  //   panelContent = (
  //     <main
  //       className="d-flex justify-content-center align-items-center text-center"
  //       style={{ height: "100vh" }}
  //     >
  //       <h5 className="text-warning text-center col-5">
  //         Brak  miesięcy zapisanych w bazie danych. Dodaj miesiąc za pomocą formularza
  //       </h5>
  //     </main>
  //   );
  // } else if (!databaseMonth) {
  //   panelContent = (
  //     <main
  //       className="d-flex justify-content-center align-items-center text-center"
  //       style={{ height: "100vh" }}
  //     >
  //       <h3 className="text-warning text-center col-5">
  //         Brak danych z miesiąca {currMonthDateToString}
  //       </h3>
  //     </main>
  //   );
  // } else {
    panelContent = (
      <main className="d-flex flex-column" style={{ height: "100vh" }}>
        <MonthPanelHeader />
        <Columns />
      </main>
    );
  // }

  return <>{panelContent}</>;
};

export default IndexMonthPanel;
