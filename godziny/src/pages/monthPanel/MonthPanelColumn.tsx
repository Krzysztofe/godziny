import { Droppable } from "react-beautiful-dnd";
import Col from "react-bootstrap/Col";
import MonthPanelDay from "./monthPanelDay/MonthPanelDay";
import { v4 as UUID } from "uuid";
import { ModelColumn } from "../../sharedModels/modelColumn";
import { ModelDay } from "../../sharedModels/modelDay";


interface Props {
  column: ModelColumn;
  columnIdx: number;
}

const MonthPanelColumn = (props: Props) => {
  return (
    <Col>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="p-1 h-100 overflow-hidden border border-1 border border-top-0"
              style={{
                backgroundColor: snapshot.isDraggingOver
                  ? "rgba(0, 0, 0, 0.1)"
                  : "rgba(255, 255, 255, 0.2)",
                height: "100%",
              }}
            >
              {Array.isArray(props.column.days)
                ? props.column.days.map((day: ModelDay, idx: number) => {
                    return (
                      <MonthPanelDay
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
    </Col>
  );
};

export default MonthPanelColumn;
