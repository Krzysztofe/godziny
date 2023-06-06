import { Droppable } from "react-beautiful-dnd";
import Day from "./Day";

interface Props {
  column: any;
}

const Column = (props: Props) => {
  console.log("", props.column);

  return (
    <div>
      <h4>{props.column.name} </h4>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                border: "1px solid black",
                width: 100,
                height: "50vh",
              }}
            >
              {props.column.items &&
                props.column?.items?.map((day: any, index: any) => {
                  return (
                    <Day day={day} index={index} key={crypto.randomUUID()} />
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
