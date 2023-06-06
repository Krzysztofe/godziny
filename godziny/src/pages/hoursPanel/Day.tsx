import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import DayForm from "./DayForm";

interface Props {
  day: any;
  index: any;
}

const Day = (props: Props) => {
 

  return (
    <div style={{ border: "1px solid black" }}>
      <Draggable
        draggableId={props.day && props.day.id.toString()}
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
              <DayForm/>
            </div>
          );
        }}
      </Draggable>
    </div>
  );
};

export default Day;
