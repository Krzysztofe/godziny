import { Droppable } from "react-beautiful-dnd";
import Day from "./Day";

interface Props {
  column: any;
  columnIdx: number;
}

const Column = (props: Props) => {
  return (
    <div className="w-100">
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="p-1 bg-primary-subtle h-100"
            >
              {Array.isArray(props.column.days)
                ? props.column.days.map((day: any, idx: number) => {
                    return (
                      <Day
                        key={crypto.randomUUID()}
                        day={day}
                        columnIdx={props.columnIdx}
                        dayIdx={idx}
                      />
                    );
                  })
                : []}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Column;
