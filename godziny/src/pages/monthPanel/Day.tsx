import { Draggable } from "react-beautiful-dnd";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import useHTTPState from "../../hooks/useHTTPState";
import useURLValues from "../../hooks/useURLValues";
import {
  useAddDayMutation,
  useDeleteDayMutation,
} from "../../services/apiSlice";
import DayPrintData from "./DayPrintData";

interface Props {
  day: any;
  columnIdx: number;
  dayIdx: number;
}

const Day = (props: Props) => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const [deleteDay, success] = useDeleteDayMutation();
  const { btnContent } = useHTTPState(success, "Usuń");

  const handleDelete = async (idx: any) => {
    Swal.fire({
      title: "Chcesz usunąć dzień?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Tak",
      cancelButtonText: "Nie",
    }).then(async result => {
      if (result.isConfirmed) {
        await deleteDay({
          year: yearFromURL,
          month: monthFromURL,
          colIdx: props.columnIdx,
          dayIdx: idx,
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
              onClick={() => handleDelete(props.dayIdx)}
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
