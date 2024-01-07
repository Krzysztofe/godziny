import { Droppable } from "react-beautiful-dnd";
import { v4 as UUID } from "uuid";
import { ModelColumn } from "../../../sharedModels/modelColumn";
import { ModelDay } from "../../../sharedModels/modelDay";
import Day from "../Day";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import "./_column.scss";

interface Props {
  column: ModelColumn;
  columnIdx: number;
}

const Column = (props: Props) => {
  const { searchedName } = useSelector((state: RootState) => state.filterDays);

  return (
    <div style={{ width: "33%" }}>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`p-1 h-100 overflow-hidden border border-1 border border-top-0 ${
                snapshot.isDraggingOver ? "isDragging" : "noDragging"
              }`}
            >
              {Array.isArray(props.column.days)
                ? props.column.days
                    .filter((day: ModelDay) => {
                      return searchedName.toUpperCase() === "" ||
                        searchedName.toUpperCase() === "IMIĘ"
                        ? day
                        : day.userName
                            ?.toUpperCase()
                            .includes(searchedName.toUpperCase());
                    })
                    .map((day: ModelDay, idx: number) => {
                      return (
                        <Day
                          key={UUID()}
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
