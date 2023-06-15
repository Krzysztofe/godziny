import { useParams } from "react-router-dom";
import useDataBaseValues from "../hooksMonthPanel/useDataBaseValues";
import FormHeaderMonhPanel from "./FormHeaderMonhPanel";


const HeaderMonthPanel = () => {
  const { monthURL } = useParams();

  const { databaseAllHours, dataCurrentHours } = useDataBaseValues(monthURL);

  const monthToDateFormat = monthURL && new Date(monthURL);
  const monthToString =
    monthToDateFormat &&
    new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthToDateFormat);

  return (
    <header>
      <div style={{ display: "flex" }}>
        <FormHeaderMonhPanel />

        <div style={{ marginLeft: 30 }}>{monthToString}</div>
      </div>

      <div>
      Wszystkie &nbsp;&nbsp; {databaseAllHours} - {dataCurrentHours}{" "}
        &nbsp;&nbsp; Do wykorzystania
      </div>
    </header>
  );
};

export default HeaderMonthPanel;
