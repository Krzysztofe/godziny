import { Droppable } from "react-beautiful-dnd";
import ColumnsDay from "./columnsDay/columnsDay";
import { v4 as UUID } from "uuid";
import { ModelDay } from "../../sharedModels/modelDay";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface Props {
  columnIdx: number;
}

const Column = (props: Props) => {
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const column = month?.columns[props.columnIdx];

  return (
    <>
      {column && (
        <div style={{ width: "33%" }}>
          <Droppable droppableId={column.id}>
            {(provided, snapshot) => {
              return (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`p-1 h-100 overflow-hidden border border-1 border border-top-0`}
                  style={{
                    backgroundColor: snapshot.isDraggingOver
                      ? "rgba(0, 0, 0, 0.1)"
                      : "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {Array.isArray(column.days)
                    ? column.days.map((day: ModelDay, idx: number) => {
                        return (
                          <ColumnsDay
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
      )}
    </>
  );
};

export default Column;
