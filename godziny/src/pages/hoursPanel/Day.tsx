import { Draggable } from "react-beautiful-dnd";

interface Props {
  item: any;
  index: any;
}

const Day = (props: Props) => {
  return (
    <div>
      <Draggable draggableId={props.item.id.toString()} index={props.index}>
        {provided => {
          return (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {props.item.content}
            </div>
          );
        }}
      </Draggable>
    </div>
  );
};

export default Day;
