import { DragDropContext } from "react-beautiful-dnd";
import { handleDragDrop } from "../utils";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  useMonthDataQuery,
  useUpdateMonthMutation,
} from "../../../services/apiSlice";
import Column from "../Column";
import HeaderColumns from "../headerColumns.tsx/HeaderColumns";
import Container from "react-bootstrap/Container";
import { addDaysToEmptyColumns } from "../utils";

const Columns = () => {
  const { monthURL } = useParams();
  const {
    // data,
    databaseAllHours,
    databaseColumns,
    dataCurrentHours,
    databaseMonth,
    submitedHoursSum,
    acceptedHoursSum,
    rejectedHoursSum,
  } = useDatabaseValues(monthURL);

  const yearFromURL = monthURL?.slice(0, 4);
  const monthFromURL = monthURL?.slice(-2);

  const { data } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });
  const columnsAddedDays = addDaysToEmptyColumns(data?.columns);

  // console.log("ddd", columnsAddedDays);

  const [updateColumns, success] = useUpdateMonthMutation();

  const [columns, setColumns] = useState([]);

  // console.log("", columns);

  useEffect(() => {
    setColumns(databaseColumns);
  }, [data, monthURL]);

  useEffect(() => {
    if (data && databaseMonth?.monthDate && columns.length > 1) {
      updateColumns({
        id: data && databaseMonth?.id,
        month: {
          ...databaseMonth,
          columns: columns,
          currentHours:
            databaseAllHours -
            submitedHoursSum -
            acceptedHoursSum -
            rejectedHoursSum +
            rejectedHoursSum,
          submitedHours: submitedHoursSum,
          acceptedHours: acceptedHoursSum,
          rejectedHours: rejectedHoursSum,
        },
      });
    }
  }, [columns, databaseAllHours, dataCurrentHours]);

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
      <main
        ref={scrollableRef}
        onScroll={handleScroll}
        className="mb-2 overflow-y-scroll "
        style={{ top: `${thumbPosition}%` }}
      >
        <Container className="mx-0 ms-sm-auto sticky-top d-flex column-gap-2">
          <HeaderColumns />
        </Container>
        <Container
          className="mx-0 ms-sm-auto mb-5 d-flex column-gap-2"
          style={{ height: "fit-content" }}
        >
          <DragDropContext
            onDragEnd={results => handleDragDrop(results, columns, setColumns)}
          >
            {columnsAddedDays?.map((column: any) => {
              return <Column column={column} key={column.id} />;
            })}
          </DragDropContext>
        </Container>
      </main>
    </>
  );
};

export default Columns;
