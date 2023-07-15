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
import { addDaysToColumns, handleDragDrop } from "../utilsMonthPanelColumns";
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

  return (
    <Container
      fluid
      ref={scrollableRef}
      onScroll={handleScroll}
      className=" mb-1 overflow-y-scroll"
    >
      <div>
        <Row className="col-sm-8 col-md-9 col-xl-8 col-xxl-8 d-flex column-gap-1 ms-sm-auto mx-xl-auto  px-1 sticky-top">
          <MonthPanelColumnsHeader thumbPosition={thumbPosition} />
        </Row>

        <Row
          className="col-sm-8 col-md-9 col-xl-8 d-flex column-gap-1 ms-sm-auto mx-xl-auto  px-1"
          style={{ height: "fit-content" }}
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
        </Row>
      </div>
    </Container>
  );
};

export default MonthPanelColumns;
