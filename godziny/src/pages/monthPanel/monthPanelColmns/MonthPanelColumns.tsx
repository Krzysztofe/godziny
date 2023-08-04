import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { ModelColumn } from "../../../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";
import useHoursSum from "../../../hooks/useHoursSum";
import useURLValues from "../../../hooks/useURLValues";
import { RootState } from "../../../redux/store";
import { useUpdateMonthMutation } from "../../../services/apiSliceMonths";
import MonthPanelColumn from "../MonthPanelColumn";
import MonthPanelColumnsHeader from "../monthPanelColumnsHeader.tsx/MonthPanelColumnsHeader";
import { addDaysToColumns, handleDragDrop } from "./utilsMonthPanelColumns";
import useScrollThumbPosition from "./useScrollThumbPosition";

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

  const rowStyles =
    "d-flex column-gap-1 px-1";

  return (
    <div
      ref={scrollableRef}
      onScroll={handleScroll}
      className="overflow-x-hidden overflow-y-scroll  ps-2 mb-1 col-xxl-9 border border-3 border-dark"
      style={{ maxHeight: "calc(100% - 155px)" }}
    >
      <Row
        className={`${rowStyles} sticky-top  `}
        style={{ marginRight: "0.1px" }}
      >
        <MonthPanelColumnsHeader thumbPosition={thumbPosition} />
      </Row>

      <Row className={`${rowStyles}`} style={{ marginRight: "0.1px" }}>
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
      </Row>
    </div>
  );
};

export default MonthPanelColumns;
