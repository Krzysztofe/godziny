import { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ButtonDeleteDay from "./buttonDeleteDay/ButtonDeleteDay";
import { DayItemContext } from "./column/Column";
import DayDetails from "./dayDetails/DayDetails";

const Day = () => {
  const { searchedName } = useSelector((state: RootState) => state.searchName);
  const { day, dayIdx } = useContext(DayItemContext);

  let printDay: string;

  if (!searchedName || searchedName === "Szukaj") {
    printDay = "d-block";
  } else if (searchedName !== day.userName) {
    printDay = "d-none";
  }

  return (
    <Draggable
      draggableId={day && day?.id}
      index={dayIdx}
      isDragDisabled={false}
    >
      {(provided, snapshot) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`mb-2 bg-white _radius border ${
              snapshot.isDragging ? "border-dark" : "border-dark-subtle"
            } ${printDay}`}
          >
            <div
              className="ps-2 pe-1 py-2 py-sm-1 _radius"
              style={{
                borderTop: `8px solid ${day?.userColor}`,
                opacity: snapshot.isDragging ? 0.6 : 1,
              }}
            >
              <DayDetails />
              <ButtonDeleteDay />
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Day;
