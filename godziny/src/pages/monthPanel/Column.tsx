import { Droppable } from "react-beautiful-dnd";
import Day from "./Day";

interface Props {
  column: any;
}

const Column = (props: Props) => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="p-1 bg-secondary-subtle"
              style={{
                height: "100%",
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
