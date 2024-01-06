import { ModelDay } from "../../../sharedModels/modelDay";
import { dateShort } from "./utilsDayDetails";
import DayIcon from "../DayIcon";

interface Props {
  day: ModelDay;
}

const DayDetails = (props: Props) => {
  if (!props?.day?.date) return <div>Brak danych</div>;

  const printDate = dateShort(props?.day?.date);

  return (
    <>
      <div className="d-flex justify-content-between fs-7 ">
        <div>{props.day?.userName}</div>
        <DayIcon place={props.day.place} />
      </div>

      <div className="d-flex fw-medium justify-content-between">
        <div>{printDate ? printDate : ""}</div>
      </div>
    </>
  );
};

export default DayDetails;
