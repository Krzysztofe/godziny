import { Draggable } from "react-beautiful-dnd";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import useHTTPState from "../../hooks/useHTTPState";
import useURLValues from "../../hooks/useURLValues";
import {
  useAddDayMutation,
  useDeleteDayMutation,
  useMonthDataQuery,
} from "../../services/apiSlice";
import DayPrintData from "./DayPrintData";

interface Props {
  day: any;
  columnIdx: number;
  dayIdx: number;
}

const Day = (props: Props) => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataMonth } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  const [deleteDay, success] = useDeleteDayMutation();
  const { btnContent } = useHTTPState(success, "Usuń");

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
          (day: any) => {
            return day?.id !== id;
          }
        );
     

        await deleteDay({
          year: yearFromURL,
          month: monthFromURL,
          colIdx: props.columnIdx,
          daysBody: daysBodyPUTRequest,
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
      {provided => {
        return (
          <div
            className="bg-white card mb-2"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <DayPrintData day={props.day} />
            <Button
              variant="info"
              size="sm"
              className="rounded-top-0 w-100 fw-medium "
              onClick={() => handleDelete(props.columnIdx, props.day.id)}
              disabled={success.isLoading}
            >
              {btnContent}
            </Button>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Day;
