import { Draggable } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useMonthsDataQuery,
  useUpdateMonthMutation,
} from "../../services/apiSlice";
import DayPrintData from "./DayPrintData";
import useDatabaseValues from "../../hooks/useDatabaseValues";
import Button from "react-bootstrap/Button";

interface Props {
  day: any;
  index: any;
}

const Day = (props: Props) => {

  const [updateColumns, succes] = useUpdateMonthMutation();
  const { monthURL } = useParams();

  const { databaseColumns, databaseMonth, data } =
    useDatabaseValues(monthURL);


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
        const updatedColumnsWithDeletedDays = [...databaseColumns].map(
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
          columns: { ...databaseMonth, columns: updatedColumnsWithDeletedDays },
        });
      }
    });
  };

  let btnContent = (
    <Draggable
      draggableId={props.day && props?.day?.id.toString()}
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
            >
              Usuń
            </Button>
          </div>
        );
      }}
    </Draggable>
  );

  if (succes.isLoading) {
    btnContent = <div> "Loading" </div>;
  }
  if (succes.isError) {
    btnContent = <div> "Błąd" </div>;
  }

  return <>{btnContent}</>;
};

export default Day;
