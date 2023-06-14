import { useParams } from "react-router-dom";
import useDataBaseValues from "../hooksMonthPanel/useDataBaseValues";
import FormHeaderMonhPanel from "./FormHeaderMonhPanel";

const HeaderMonthPanel = () => {
  const { monthValue } = useParams();

  const { databaseAllHours, dataCurrentHours } =
    useDataBaseValues(monthValue);

  const monthToDateFormat = monthValue && new Date(monthValue);
  const monthToString =
    monthToDateFormat &&
    new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthToDateFormat);

  return (
    <header>
      <div style = {{display: "flex",}}>
      <FormHeaderMonhPanel />
      <div style = {{marginLeft: 30}}>{monthToString}</div>
      </div>
      
      <div>Godziny w miesiącu: {databaseAllHours} </div>
      <div>Godziny do wykorzystania: {dataCurrentHours} </div>
    </header>
  );
};

export default HeaderMonthPanel;
