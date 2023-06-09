import { MdFactory } from "react-icons/md";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { ModelDay } from "../../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";
import { useUsersQuery } from "../../services/apiSliceUsers";

interface Props {
  day: ModelDay;
}

const MonthPanelDayPrintData = (props: Props) => {
  const { data: dataUsers } = useUsersQuery();

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
      <>
        <div className="d-flex justify-content-between fs-7">
          <div>{props.day?.userName}</div>

          <div>
            {props.day?.place === "Poza" ? (
              <TbArrowBigRightLineFilled style={{ color: "rgb(80,173,150)" }} />
            ) : (
              <MdFactory style={{ color: "rgb(255, 181, 9)" }} />
            )}
          </div>
        </div>

        <div className="d-flex fw-medium justify-content-between">
          <div>{dateToPrint ? dateToPrint : ""}</div>
        </div>
      </>
    );
  }
};

export default MonthPanelDayPrintData;
