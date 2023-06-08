import { Droppable } from "react-beautiful-dnd";
import Day from "./Day";

interface Props {
  column: any;
  columnIdx:any
}

const Column = (props: Props) => {


  return (
    <div>
      <h4>{props.column.columnName} </h4>
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
              {props.column.days && props.column.days.length >0 &&
                props.column?.days?.map((day: any, idx: any) => {
                  return (
                    <Day day={day} index={idx} key={crypto.randomUUID()} columnIdx = {props.columnIdx}
                    dayIdx = {idx}
                    />
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
