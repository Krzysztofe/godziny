import { ModelDay } from "../../../sharedModels/modelDay";
import { dateShort } from "./utilsDayDetails";
import DayIcon from "../dayIcon/DayIcon";

interface Props {
  day: ModelDay;
}

const DayDetails = (props: Props) => {
  if (!props?.day) return <div>Brak danych</div>;

  const printDate = dateShort(props?.day?.date);

  return (
    <>
      <div className="d-flex justify-content-between text-light-emphasis fs-4 ">
        <div>{props.day?.userName}</div>
        <DayIcon place={props.day.place} />
      </div>

      <div className="d-flex justify-content-between text-light-emphasis fs-4 _fw-semiBold">
        <div>{printDate ? printDate : ""}</div>
      </div>
    </>
  );
};

export default DayDetails;
