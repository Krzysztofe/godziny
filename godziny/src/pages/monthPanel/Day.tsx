import { Draggable } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useUpdateMonthMutation } from "../../services/apiSlice";
import DayPrintData from "./DayPrintData";
import useDatabaseValues from "../../hooks/useDatabaseValues";
import Button from "react-bootstrap/Button";
import useHTTPState from "../../hooks/useHTTPState";

interface Props {
  day: any;
  index: any;
}

const Day = (props: Props) => {
  const { monthURL } = useParams();
  const { databaseColumns, databaseMonth, data } = useDatabaseValues(monthURL);
  const [updateColumns, success] = useUpdateMonthMutation();

  const { btnContent } = useHTTPState(success, "Usuń");

  const handleUpdate = async (id: any) => {
    Swal.fire({
      title: "Chcesz usunąć dzień?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Tak",
      cancelButtonText: "Nie",
    }).then(async result => {
      if (result.isConfirmed) {
        const columnsWithDeletedDays = [...databaseColumns].map(
          (column: any) => {
            if (column && column.days) {
              return {
                ...column,
                days: column.days.filter((day: any) => day.id !== id),
              };
            }
            return column;
          }
        );

        await updateColumns({
          id: data && databaseMonth?.id,
          month: { ...databaseMonth, columns: columnsWithDeletedDays },
        });
      }
    });
  };

  return (
    <Draggable
      draggableId={props.day && props?.day?.id}
      index={props.index}
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
              onClick={() => handleUpdate(props.day.id)}
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
