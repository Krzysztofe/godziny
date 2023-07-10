import { Draggable } from "react-beautiful-dnd";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { ModelDay } from "../../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";
import useHTTPState from "../../hooks/useHTTPState";
import useURLValues from "../../hooks/useURLValues";
import {
  useDeleteDayMutation,
  useMonthDataQuery,
} from "../../services/apiSlice";
import MonthPanelDayPrintData from "./MonthPanelDayPrintData";
import { FiClock } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  day: ModelDay;
  columnIdx: number;
  dayIdx: number;
}

const MonthPanelDay = (props: Props) => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataMonth } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  const [deleteDay, success] = useDeleteDayMutation();
  const { btnContent } = useHTTPState(success, <RiDeleteBin6Line className="text-danger" />);

  const handleDelete = async (idx: number, id: string) => {
    Swal.fire({
      title: "Chcesz usunąć dzień?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Tak",
      cancelButtonText: "Nie",
    }).then(async result => {
      if (result.isConfirmed) {
        const daysBodyPUTRequest = dataMonth?.columns[idx]?.days?.filter(
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

  return (
    <Draggable
      draggableId={props.day && props?.day?.id}
      index={props.dayIdx}
      isDragDisabled={false}
    >
      {(provided, snapshot) => {
        return (
          <div
            className={`bg-white card mb-2 px-1 py-2 py-sm-1 ${
              snapshot.isDragging ? "border-dark" : "border"
            }`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <MonthPanelDayPrintData day={props.day} />

            <Button
              onClick={() => handleDelete(props.columnIdx, props.day.id)}
              className="d-flex justify-content-between  align-items-center p-0 bg-transparent border-0"
              disabled={success.isLoading}
            >
              <div className="d-flex align-items-center fs-7">
                {props.day?.hours} <FiClock className="  ms-1" />
              </div>
              <div className="d-flex align-items-center">{btnContent}</div>
            </Button>
          </div>
        );
      }}
    </Draggable>
  );
};

export default MonthPanelDay;
