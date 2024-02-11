import { useContext } from "react";
import { DayItemContext } from "../column/Column";
import DayIcon from "../dayIcon/DayIcon";
import { dateShort } from "./utilsDayDetails";

const DayDetails = () => {
  const { day } = useContext(DayItemContext);
  
  if (!day) return <div>Brak danych</div>;

  const printDate = day && dateShort(day.date);

  return (
    <>
      <div className="d-flex justify-content-between text-light-emphasis fs-4 ">
        <div>{day.userName}</div>
        <DayIcon />
      </div>

      <div className="d-flex justify-content-between text-light-emphasis fs-4 _fw-semiBold">
        <div>{printDate ? printDate : ""}</div>
      </div>
    </>
  );
};

export default DayDetails;
