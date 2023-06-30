import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Columns from "../colmns/Columns";
import HeaderMonthPanel from "../headerMonthPanel/HeaderMonthPanel";
import useDatabaseValues from "../../../hooks/useDatabaseValues";

const IndexMonthPanel = () => {
  const { monthURL } = useParams();
  const { databaseMonth, data, isLoading } = useDatabaseValues(monthURL);

  let panelContent;

  if (isLoading) {
    panelContent = (
      <main
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </main>
    );
  } else if (!data) {
    panelContent = (
      <main
        className="d-flex justify-content-center align-items-center text-center"
        style={{ height: "100vh" }}
      >
        <h3>
          Brak miesięcy zapisanych w bazie danych.
          <br /> Zapisz miesiąc w formularzu
        </h3>
      </main>
    );
  } else if (!databaseMonth) {
    panelContent = (
      <main
        className="d-flex justify-content-center align-items-center text-center"
        style={{ height: "100vh" }}
      >
        <h3>Brak danych z miesiąca...</h3>
      </main>
    );
  } else {
    panelContent = (
      <main className="d-flex flex-column" style={{ height: "100vh" }}>
        <HeaderMonthPanel />
        <Columns />
      </main>
    );
  }

  return <>{panelContent}</>;
};

export default IndexMonthPanel;
