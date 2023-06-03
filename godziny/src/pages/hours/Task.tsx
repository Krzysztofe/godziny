import { Draggable } from "react-beautiful-dnd";

interface Props {
  task: any;
  index: any;
}

const Task = (props: Props) => {
  return (
    <div>
      <Draggable
        draggableId={`${props.task.id}`}
        key={props.task.id}
        index={props.index}
      >
        {(provided, snapshot) => {
          return (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              // isDragging = {snapshot.isDragging}
            >
             {props.task.title}
             
            </div>
          );
        }}
        {/* {provided.placeholder} */}
      </Draggable>
    </div>
  );
};

export default Task;
