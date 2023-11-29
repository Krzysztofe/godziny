import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { ModelColumn } from "../../../components/sidebar/someData/dataSidebarMonthForm";
import useHoursSum from "../../../hooks/useHoursSum";
import useURLValues from "../../../hooks/useURLValues";
import { RootState } from "../../../redux/store";
import { useUpdateMonthMutation } from "../../../services/apiSliceMonths";
import MonthPanelColumn from "../MonthPanelColumn";
import MonthPanelColumnsHeader from "../monthPanelColumnsHeader.tsx/MonthPanelColumnsHeader";
import useScrollThumbPosition from "./useScrollThumbPosition";
import { addDaysToColumns, handleDragDrop } from "./utilsMonthPanelColumns";

const MonthPanelColumns = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const [updateMonth] = useUpdateMonthMutation();
  const { submittedHoursSum, acceptedHoursSum, rejectedHoursSum } =
    useHoursSum();

  const { scrollableRef, thumbPosition, handleScroll } =
    useScrollThumbPosition();

  const { month } = useSelector((state: RootState) => state.monthsPanel);

  const columnsWithDays = addDaysToColumns(month?.columns);

  const [columns, setColumns] = useState<ModelColumn[]>([]);

  useEffect(() => {
    setColumns(columnsWithDays);
  }, [month]);

  useEffect(() => {
    if (columns.length > 0) {
      updateMonth({
        year: yearFromURL,
        month: monthFromURL,
        monthBody: {
          ...month,
          columns: columns,
          calc: {
            ...month?.calc,
            currentHours:
              (month?.calc?.allHours ?? 0) -
              submittedHoursSum -
              acceptedHoursSum -
              rejectedHoursSum +
              rejectedHoursSum,
            submittedHours: submittedHoursSum,
            acceptedHours: acceptedHoursSum,
            rejectedHours: rejectedHoursSum,
          },
        },
      });
    }
  }, [columns]);

  const handleDragEnd = (results: DropResult) => {
    handleDragDrop(results, columns, setColumns);
  };

  const rowStyles = "d-flex column-gap-1";

  return (
    <div
      ref={scrollableRef}
      onScroll={handleScroll}
      className="p-0 overflow-y-scroll"
      style={{ height: "fit-content", maxHeight: "100%" }}
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
