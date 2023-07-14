import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ModelColumn } from "../../../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";
import useHoursSum from "../../../hooks/useHoursSum";
import useURLValues from "../../../hooks/useURLValues";
import {
  useMonthDataQuery,
  useUpdateCalcMutation,
  useUpdateColumnsMutation,
} from "../../../services/apiSliceMonths";
import MonthPanelColumn from "../MonthPanelColumn";
import MonthPanelColumnsHeader from "../monthPanelColumnsheader.tsx/MonthPanelColumnsHeader";
import { addDaysToColumns, handleDragDrop } from "../utilsMonthPanelColumns";
import useScrollThumbPosition from "./useScrollThumbPosition";
import { motion } from "framer-motion";

const MonthPanelColumns = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataMonth } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });
  const [updateColumns] = useUpdateColumnsMutation();
  const [updateCalc] = useUpdateCalcMutation();
  const { submittedHoursSum, acceptedHoursSum, rejectedHoursSum } =
    useHoursSum();
  const { scrollableRef, thumbPosition, handleScroll } =
    useScrollThumbPosition();

  const columnsWithDays = dataMonth?.columns
    ? addDaysToColumns(dataMonth.columns)
    : [];

  const [columns, setColumns] = useState<ModelColumn[]>([]);
  const [results, setResults] = useState<DropResult | null>(null);

  useEffect(() => {
    setColumns(columnsWithDays);
  }, [dataMonth]);

  useEffect(() => {
    if (results !== null) {
      updateColumns({
        year: yearFromURL,
        month: monthFromURL,
        columnsBody: columns,
      });
    }
  }, [results]);

  useEffect(() => {
    if (dataMonth?.id) {
      updateCalc({
        year: yearFromURL,
        month: monthFromURL,
        calcBody: {
          ...dataMonth?.calc,
          currentHours:
            (dataMonth?.calc?.allHours ?? 0) -
            submittedHoursSum -
            acceptedHoursSum -
            rejectedHoursSum +
            rejectedHoursSum,
          submittedHours: submittedHoursSum,
          acceptedHours: acceptedHoursSum,
          rejectedHours: rejectedHoursSum,
        },
      });
    }
  }, [dataMonth]);

  const handleDragEnd = (results: DropResult) => {
    handleDragDrop(results, columns, setColumns);
    setResults(results);
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
