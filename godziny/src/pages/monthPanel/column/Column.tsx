import { Droppable } from "react-beautiful-dnd";
import { v4 as UUID } from "uuid";
import { ModelColumn } from "../../../sharedModels/modelColumn";
import { ModelDay } from "../../../sharedModels/modelDay";
import Day from "../Day";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import "./_column.scss";
import { createContext } from "react";

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
                ? props.column.days.map((day: ModelDay, idx: number) => {
                    return (
                      <DayItemContext.Provider
                        key={UUID()}
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
