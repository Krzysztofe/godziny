import { useParams } from "react-router-dom";
import Columns from "./colmns/Columns";
import HeaderMonthPanel from "./headerMonthPanel/HeaderMonthPanel";
import useDataBaseValues from "./useDataBaseValues";

const IndexMonthPanel = () => {
  const { monthURL } = useParams();
  const { databaseMonth } = useDataBaseValues(monthURL);

  return (
    <>
      {!databaseMonth || databaseMonth === null ? (
        <main style={{ textAlign: "center" }}>
          Brak danych, wybierz miesiąc
        </main>
      ) : (
        <div className = "d-flex flex-column" style={{ height: "100vh" }}>
          <HeaderMonthPanel />
          <Columns />
        </div>
      )}
    </>
  );
};

export default IndexMonthPanel;
