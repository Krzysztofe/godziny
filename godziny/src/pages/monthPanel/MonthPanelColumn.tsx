import { Droppable } from "react-beautiful-dnd";
import Col from "react-bootstrap/Col";
import { ModelColumn, ModelDay } from "../../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";
import MonthPanelDay from "./MonthPanelDay";

interface Props {
  column: ModelColumn;
  columnIdx: number;
}

const MonthPanelColumn = (props: Props) => {
  return (
    <Col className="p-0">
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`p-1 h-100 ${
                snapshot.isDraggingOver ? "bg-dark-subtle" : "bg-primary"
              }`}
            >
              {Array.isArray(props.column.days)
                ? props.column.days.map((day: ModelDay, idx: number) => {
                    return (
                      <MonthPanelDay
                        key={crypto.randomUUID()}
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
