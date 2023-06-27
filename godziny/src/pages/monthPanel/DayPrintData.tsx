import { MdFactory } from "react-icons/md";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { FiClock } from "react-icons/fi";
import { useParams } from "react-router-dom";

interface Props {
  day: any;
}

const DayPrintData = (props: Props) => {
  const { monthURL } = useParams();

  const monthToDateFormat = monthURL && new Date(monthURL);
  const monthToString =
    monthToDateFormat &&
    new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    })
      .format(monthToDateFormat)
      .slice(0, -5);

  const date = props.day.date.slice(5);
  const dateToPrint = date[0] === "0" ? date.slice(1) : date;

  console.log("", monthToString);

  return (
    <div className="px-1 py-2">
      <div
        className="d-flex justify-content-between"
        style={{ fontSize: "clamp(0.8rem, 3.4vw, 1.2rem)" }}
      >
        <div>{props.day.userName}</div>
        <div>
          {props.day.hours} <FiClock className="text-secondary" />
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div>{date}</div>
        <div>
          {props.day.place === "Poza" ? (
            <TbArrowBigRightLineFilled className="text-success" />
          ) : (
            <MdFactory className="text-danger" />
          )}
        </div>
      </div>
    </div>
  );
};

export default DayPrintData;
