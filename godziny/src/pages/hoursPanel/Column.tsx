import { Droppable } from "react-beautiful-dnd";
import Day from "./Day";
import useDataBaseValues from "./useDataBaseValues";

interface Props {
  column: any;
}

const Column = (props: Props) => {
  const {
    databaseColumnsId,
    databaseAllHours,
    dataCurrentHours,
    dataBaseSubmitedHours,
    databaseColumns,
    submitedHoursSum,
    data,
    updateColumns,
  } = useDataBaseValues();

  return (
    <div>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                border: "1px solid black",
                width: "30vw",
                minHeight: "100vh",
                height: "fit-content",
              }}
            >
              {props.column.days &&
                props.column.days.length > 0 &&
                props.column?.days?.map((day: any, idx: any) => {
                  return (
                    <Day day={day} index={idx} key={crypto.randomUUID()} />
                  );
                })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Column;
