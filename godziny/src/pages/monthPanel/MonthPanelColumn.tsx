import { Droppable } from "react-beautiful-dnd";
import MonthPanelDay from "./MonthPanelDay";
import { ModelColumn } from "../../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";
import { ModelDay } from "../../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";

interface Props {
  column: ModelColumn;
  columnIdx: number;
}

const MonthPanelColumn = (props: Props) => {
  return (
    <div className="w-100">
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="p-1 bg-primary-subtle h-100"
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
    </div>
  );
};

export default MonthPanelColumn;
