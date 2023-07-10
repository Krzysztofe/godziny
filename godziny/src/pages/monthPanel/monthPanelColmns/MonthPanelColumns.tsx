import { useEffect, useRef, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import useURLValues from "../../../hooks/useURLValues";
import {
  useMonthDataQuery,
  useUpdateCalcMutation,
  useUpdateColumnsMutation,
} from "../../../services/apiSlice";
import MonthPanelColumn from "../MonthPanelColumn";
import MonthPanelColumnsHeader from "../monthPanelColumnsheader.tsx/MonthPanelColumnsHeader";
import { addDaysToColumns, handleDragDrop } from "../utilsMonthPanelColumns";
import useHoursSum from "../../../hooks/useHoursSum";
import { ModelColumn } from "../../../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";

const MonthPanelColumns = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataMonth } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });
  const [updateColumns] = useUpdateColumnsMutation();
  const [updateCalc] = useUpdateCalcMutation();
  const columnsWithDays = dataMonth?.columns
    ? addDaysToColumns(dataMonth.columns)
    : [];
  const { submittedHoursSum, acceptedHoursSum, rejectedHoursSum } =
    useHoursSum();

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
    updateCalc({
      year: yearFromURL,
      month: monthFromURL,
      allHours: {
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
  }, [dataMonth]);

  const handleDragEnd = (results: DropResult) => {
    handleDragDrop(results, columns, setColumns);
    setResults(results);
  };

  const scrollableRef = useRef(null);
  const [thumbPosition, setThumbPosition] = useState(0);

  const handleScroll = () => {
    const element = scrollableRef.current;

    if (element) {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const maxScrollTop = scrollHeight - clientHeight;
      const thumbPosition = (scrollTop / maxScrollTop) * 100;
      setThumbPosition(thumbPosition);
    }
  };



  return (
    <>
      <Container
        fluid
        ref={scrollableRef}
        onScroll={handleScroll}
        className=" mb-1 overflow-y-scroll "
        style={{ top: `${thumbPosition}%` }}
      >
        <Row className="col-sm-8 col-md-9 d-flex column-gap-1 justify-content-end me-lg-5 ms-sm-auto px-1 sticky-top  ">
          <MonthPanelColumnsHeader thumbPosition={thumbPosition} />
        </Row>

        <Row
          className="col-sm-8 col-md-9 d-flex column-gap-1 justify-content-end me-lg-5 ms-sm-auto px-1"
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
      </Container>
    </>
  );
};

export default MonthPanelColumns;
