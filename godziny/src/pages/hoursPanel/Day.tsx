import { Draggable } from "react-beautiful-dnd";
import { FaTrashAlt } from "react-icons/fa";
import DayPrintData from "./DayPrintData";
import useDataBaseValues from "./useDataBaseValues";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
interface Props {
  day: any;
  index: any;
}

const Day = (props: Props) => {
    const { numberOfDays } = useSelector(
      (state: RootState) => state.hoursPanel
    );
  const { dataBaseColumnsId,
     newColumnsFromDatabase,
     updateColumns } =
    useDataBaseValues();

  const handleUpdate = async (id: any) => {
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

const columnsData = {
  allHours: numberOfDays,
  columns: updatedColumnsWithDeletedDays,
};

    await updateColumns({
      id: dataBaseColumnsId,
      columns: columnsData,
    });
  };

  return (
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
};

export default Day;
