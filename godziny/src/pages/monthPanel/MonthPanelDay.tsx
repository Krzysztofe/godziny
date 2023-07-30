import { Draggable } from "react-beautiful-dnd";
import Button from "react-bootstrap/Button";
import { FiClock } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { ModelDay } from "../../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";
import useHTTPState from "../../hooks/useHTTPState";
import useURLValues from "../../hooks/useURLValues";
import { RootState } from "../../redux/store";
import { useDeleteDayMutation } from "../../services/apiSliceMonths";
import { alertHelper } from "../../utils/alertHelpers";
import MonthPanelDayPrintData from "./MonthPanelDayPrintData";

interface Props {
  day: ModelDay;
  columnIdx: number;
  dayIdx: number;
}

const MonthPanelDay = (props: Props) => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { month } = useSelector((state: RootState) => state.monthsPanel);
  const [deleteDay, success] = useDeleteDayMutation();
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger" />
  );

  const handleDelete = async (idx: number, id: string) => {
    Swal.fire(alertHelper("Chcesz usuniąć dzień")).then(async result => {
      if (result.isConfirmed) {
        const daysBodyPUTRequest = month?.columns[idx]?.days?.filter(
          (day: ModelDay) => {
            return day?.id !== id;
          }
        );

        await deleteDay({
          year: yearFromURL,
          month: monthFromURL,
          colIdx: props.columnIdx,
          daysBody: daysBodyPUTRequest || [],
        });
      }
    });
  };

  console.log("", props.day?.userColor);

  return (
    <Draggable
      draggableId={props.day && props?.day?.id}
      index={props.dayIdx}
      isDragDisabled={false}
    >
      {(provided, snapshot) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`mb-2 bg-white rounded border ${
              snapshot.isDragging
                ? "border-secondary-subtle"
                : "border-transparent"
            } `}
          >
            <div
              className= " mb-2 px-1 py-2 py-sm-1"
              
              style={{
                borderTop: `4px solid ${props.day?.userColor}`,
                opacity: snapshot.isDragging ? 0.8 : 1,
              }}
            >
              <MonthPanelDayPrintData day={props.day} />

              <Button
                onClick={() => handleDelete(props.columnIdx, props.day.id)}
                className="d-flex justify-content-between  align-items-center w-100 p-0 bg-transparent border-0"
                disabled={success.isLoading}
              >
                <div className="d-flex align-items-center fs-7">
                  {props.day?.hours} <FiClock className="  ms-1" />
                </div>
                <div className="d-flex align-items-center">{btnContent}</div>
              </Button>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default MonthPanelDay;
