import { Droppable } from "react-beautiful-dnd";
import Day from "./Day";

interface Props {
  id: any;
  column: any;
}

const Column = (props: Props) => {
  return (
    <Droppable droppableId={props.id.toString()}>
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
            <h4>{props.column.name} </h4>
            {props.column.items.map((item: any, index: any) => {
              return <Day item={item} index={index} key={item.id} />;
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default Column;
