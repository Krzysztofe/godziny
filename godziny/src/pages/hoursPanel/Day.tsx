import { Draggable } from "react-beautiful-dnd";
import { FaTrashAlt } from "react-icons/fa";
import DayPrintData from "./DayPrintData";
import useDataBaseValues from "./useDataBaseValues";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useUpdateColumnsMutation } from "../../services/apiSlice";
import Swal from "sweetalert2";

interface Props {
  day: any;
  index: any;
}

const Day = (props: Props) => {
  const { numberOfDays } = useSelector((state: RootState) => state.hoursPanel);

  const [updateColumns, succes] = useUpdateColumnsMutation();

  const {
    databaseColumnsId,
    newColumnsFromDatabase,
    submitedHoursSum,
    databaseAllHours,
    acceptedHoursSum,
    rejectedHoursSum,
  } = useDataBaseValues();

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
        const updatedColumnsWithDeletedDays = newColumnsFromDatabase.map(
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
          id: databaseColumnsId,
          columns: {
            allHours: databaseAllHours,
            currentHours:
              databaseAllHours -
              submitedHoursSum -
              acceptedHoursSum -
              rejectedHoursSum +
              rejectedHoursSum,
            submitedHours: submitedHoursSum,
            acceptedHours: acceptedHoursSum,
            rejectedHpurs: rejectedHoursSum,
            columns: updatedColumnsWithDeletedDays,
          },
        });
      }
    });
  };

  let btnContent = (
    <div style={{ border: "1px solid black" }}>
      <Draggable
        draggableId={props.day && props?.day?.id.toString()}
        index={props.index}
      >
        {provided => {
          return (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <strong>{props.day.content}</strong>
              <DayPrintData day={props.day} />
              <button onClick={() => handleUpdate(props.day.id)}>
                <FaTrashAlt />
              </button>
            </div>
          );
        }}
      </Draggable>
    </div>
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
