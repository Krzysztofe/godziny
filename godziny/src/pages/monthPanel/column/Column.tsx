import { createContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ModelColumn } from "../../../sharedModels/modelColumn";
import { ModelDay } from "../../../sharedModels/modelDay";
import Day from "../Day";
import "./_column.scss";

type ContextType = {
  day: ModelDay;
  columnIdx: number;
  dayIdx: number;
};

export const DayItemContext = createContext<ContextType>({} as ContextType);

type Props = {
  column: ModelColumn;
  columnIdx: number;
};

const Column = (props: Props) => {
  const { searchedName } = useSelector((state: RootState) => state.searchName);

  const isDraging = (stapshot: boolean) => {
    return stapshot ? "_isDragging" : "_noDragging";
  };
  const isSearching =
    searchedName && searchedName !== "Szukaj"
      ? "_isSearching _bg-opacity-dark"
      : "";

  return (
    <div className="_column position-relative">
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`p-1 pt-3 px-lg-3 h-100 overflow-hidden border border-1 border border-top-0   ${isDraging(
                snapshot.isDraggingOver
              )} ${isSearching}`}
            >
              {Array.isArray(props.column.days)
                ? props.column?.days.map((day: ModelDay, idx: number) => {
                    return (
                      <DayItemContext.Provider
                        key={day._id}
                        value={{ day, columnIdx: props.columnIdx, dayIdx: idx }}
                      >
                        <Day />
                      </DayItemContext.Provider>
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
