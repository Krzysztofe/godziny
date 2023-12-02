import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { ModelColumn } from "../../../components/someData/dataSidebarMonthForm";
import useURLValues from "../../../hooks/useURLValues";
import { RootState } from "../../../redux/store";
import { useUpdateMonthMutation } from "../../../services/apiSliceMonths";
import MonthPanelColumn from "../MonthPanelColumn";
import MonthPanelColumnsHeader from "../monthPanelColumnsHeader.tsx/MonthPanelColumnsHeader";
import useScrollThumbPosition from "./useScrollThumbPosition";
import { addDaysToColumns, handleDragDrop } from "./utilsMonthPanelColumns";
import useWindowWidth from "../../../hooks/useWindowWidth";
import getHoursFromColumns from "../../../utils/getHoursFromColumns";

const MonthPanelColumns = () => {
  const { windowWidth } = useWindowWidth();
  const { yearFromURL, monthFromURL } = useURLValues();
  const [updateMonth] = useUpdateMonthMutation();
  const { scrollableRef, thumbPosition, handleScroll } =
    useScrollThumbPosition();

  const { month } = useSelector((state: RootState) => state.monthsPanel);

  const columnsWithDays = addDaysToColumns(month?.columns);

  const [columns, setColumns] = useState<ModelColumn[]>([]);
  const [executeUpdateMonth, setExecuteUpdateMonth] = useState(false);

  const { submittedHours, acceptedHours, rejectedHours } =
    getHoursFromColumns(columns);

  useEffect(() => {
    setColumns(columnsWithDays);
  }, [month.columns]);

  useEffect(() => {
    if (columns.length > 0) {
      updateMonth({
        year: yearFromURL,
        month: monthFromURL,
        monthBody: {
          ...month,
          columns: columns,
          calcHours: {
            ...month?.calcHours,
            currentHours:
              month?.calcHours?.allHours -
              submittedHours -
              acceptedHours -
              rejectedHours +
              rejectedHours,
            submittedHours,
            acceptedHours,
            rejectedHours,
          },
        },
      });
    }
  }, [executeUpdateMonth]);

  const handleDragEnd = (results: DropResult) => {
    handleDragDrop(results, columns, setColumns);
    setExecuteUpdateMonth(prev => !prev);
  };

  const rowStyles = "d-flex column-gap-1";

  return (
    <div
      ref={scrollableRef}
      onScroll={handleScroll}
      className="p-0 overflow-y-scroll"
      style={{
        height: "fit-content",
        maxHeight:
          windowWidth >= 500
            ? "calc(100% - 32px)"
            : "calc(100% - 32px - 2.5rem)",
      }}
    >
      <div className={`${rowStyles} sticky-top`}>
        <MonthPanelColumnsHeader thumbPosition={thumbPosition} />
      </div>

      <div className={`${rowStyles}`}>
        <DragDropContext onDragEnd={handleDragEnd}>
          {columns?.map((column: ModelColumn, idx: number) => {
            return (
              <MonthPanelColumn
                key={column.id}
                column={column}
                columnIdx={idx}
              />
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default MonthPanelColumns;
