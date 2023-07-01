import { DragDropContext } from "react-beautiful-dnd";
import { handleDragDrop } from "../utils";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useUpdateMonthMutation } from "../../../services/apiSlice";
import Column from "../Column";
import HeaderColumns from "../headerColumns.tsx/HeaderColumns";
import Container from "react-bootstrap/Container";

const Columns = () => {
  const { monthURL } = useParams();
  const {
    data,
    databaseAllHours,
    databaseColumns,
    dataCurrentHours,
    databaseMonth,
    submitedHoursSum,
    acceptedHoursSum,
    rejectedHoursSum,
  } = useDatabaseValues(monthURL);

  const [updateColumns, success] = useUpdateMonthMutation();

  console.log("", success.isLoading);

  const [columns, setColumns] = useState<any[]>([]);

  useEffect(() => {
    data && databaseMonth && setColumns(databaseColumns);
  }, [data, monthURL]);

  useEffect(() => {
    data &&
      columns?.length > 1 &&
      databaseMonth?.monthDate &&
      updateColumns({
        id: data && databaseMonth?.id,
        columns: {
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
            {columns &&
              columns.length > 0 &&
              columns.map((column: any) => {
                return <Column column={column} key={column.id} />;
              })}
          </DragDropContext>
        </Container>
      </main>
    </>
  );
};

export default Columns;