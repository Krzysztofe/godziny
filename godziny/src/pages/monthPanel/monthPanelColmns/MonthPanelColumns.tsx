import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { ModelColumn } from "../../../sharedModels/modelColumn";
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
  const { yearFromURL, monthFromURL } = useURLValues();
  const [updateMonth] = useUpdateMonthMutation();
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const columnsWithDays = month && addDaysToColumns(month?.columns);
  const [columns, setColumns] = useState<ModelColumn[]>([]);
  const [executeUpdateMonth, setExecuteUpdateMonth] = useState(false);
  const { submittedHours, acceptedHours, rejectedHours } =
    getHoursFromColumns(columns);
  const { scrollableRef, thumbPosition, handleScroll } =
    useScrollThumbPosition();
  const { windowWidth } = useWindowWidth();

  useEffect(() => {
    if (columnsWithDays) {
      setColumns(columnsWithDays);
    }
  }, [month?.columns]);

  useEffect(() => {
    if (columns.length > 0 && month) {
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
    month &&
      handleDragDrop(
        results,
        month?.calcHours.currentHours,
        columns,
        setColumns
      );
    setExecuteUpdateMonth(prev => !prev);
  };

  const rowStyles = "d-flex justify-content-between";

  return (
    <div
      ref={scrollableRef}
      onScroll={handleScroll}
      className="overflow-y-scroll h-100"
      style={{
        maxHeight:
          windowWidth >= 500
            ? "calc(100% - 32px)"
            : "calc(100% - 32px - 2.5rem)",
      }}
    >
      <div className={`${rowStyles} sticky-top`}>
        <MonthPanelColumnsHeader thumbPosition={thumbPosition} />
      </div>

      <div
        className={`${rowStyles}`}
        style={{ minHeight: "calc(100% - 35px)" }}
      >
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
