import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

interface Props {
  id: any;
  title: any;
  tasks: any;
}

const Column = (props: Props) => {
  return (
    <div>
      <Droppable droppableId={props.id}>
        {(provided, snapshot) => {
          return <div></div>;
        }}
      </Droppable>
    </div>
  );
};

export default Column;
