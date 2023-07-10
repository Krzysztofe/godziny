import { MdFactory } from "react-icons/md";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { FiClock } from "react-icons/fi";
import { ModelDay } from "../../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";

interface Props {
  day: ModelDay;
}

const MonthPanelDayPrintData = (props: Props) => {
  let dateToPrint;

  if (!props?.day?.date) {
    return <div>Brak danych</div>;
  } else {
    const date = new Date(props.day.date);
    dateToPrint = new Intl.DateTimeFormat("pl-PL", {
      day: "numeric",
      month: "short",
    }).format(date);
    return (
      <div className="">
        <div
          className="d-flex justify-content-between fs-7"
          // style={{ fontSize: "clamp(0.8rem)" }}
        >
          <div>{props.day?.userName}</div>

          <div>
            {props.day?.place === "Poza" ? (
              <TbArrowBigRightLineFilled className="text-success" />
            ) : (
              <MdFactory
             
                style={{ color: "rgb(75,173,232)" }}
              />
            )}
          </div>
        </div>

        <div className="d-flex fw-medium justify-content-between">
          <div>{dateToPrint ? dateToPrint : ""}</div>
        </div>
      </div>
    );
  }
};

export default MonthPanelDayPrintData;
