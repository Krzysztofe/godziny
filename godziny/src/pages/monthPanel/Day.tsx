import { Draggable } from "react-beautiful-dnd";
import { ModelDay } from "../../sharedModels/modelDay";
import ButtonDeleteDay from "./buttonDeleteDay/ButtonDeleteDay";
import DayDetails from "./dayDetails/DayDetails";

interface Props {
  day: ModelDay;
  columnIdx: number;
  dayIdx: number;
}

const Day = (props: Props) => {
  return (
    <Draggable
      draggableId={props.day && props?.day?.id}
      index={props.dayIdx}
      isDragDisabled={false}
    >
      {(provided, snapshot) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`mb-2 bg-white rounded border ${
              snapshot.isDragging ? "border-dark" : "border-dark-subtle"
            } `}
          >
            <div
              className="px-1 py-2 py-sm-1 rounded"
              style={{
                borderTop: `8px solid ${props.day?.userColor}`,
                opacity: snapshot.isDragging ? 0.8 : 1,
              }}
            >
              <DayDetails day={props.day} />

              <ButtonDeleteDay columnIdx={props.columnIdx} day={props.day} />
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Day;
