import { dateShort } from "./utilsDayDetails";
import DayIcon from "../dayIcon/DayIcon";
import { useContext, useEffect } from "react";
import { DayItemContext } from "../column/Column";

const DayDetails = () => {
  const { day } = useContext(DayItemContext);

      // console.log("Component was rendered after some action");
  
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
