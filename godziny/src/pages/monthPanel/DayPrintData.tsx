import { MdFactory } from "react-icons/md";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { FiClock } from "react-icons/fi";
import { useParams } from "react-router-dom";
interface Props {
  day: any;
}

const DayPrintData = (props: Props) => {
  const date = new Date(props?.day?.date);

  const dateToPrint =
    date &&
    new Intl.DateTimeFormat("pl-PL", {
      day: "numeric",
      month: "short",
    }).format(date);

  return (
    <div className="px-1 py-2 py-sm-1">
      <div
        className="d-flex justify-content-between"
        style={{ fontSize: "clamp(0.8rem, 3.4vw, 1rem)" }}
      >
        <div>{props.day?.userName}</div>
        <div>
          {props.day?.hours} <FiClock className="text-primary" />
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div>{dateToPrint ? dateToPrint : ""}</div>
        <div>
          {props.day?.place === "Poza" ? (
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
