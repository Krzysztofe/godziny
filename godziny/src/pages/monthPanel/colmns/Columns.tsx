import { DragDropContext } from "react-beautiful-dnd";
import { handleDragDrop } from "../utils";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  useMonthDataQuery,
  useUpdateColumnsMutation,
  useUpdateMonthMutation,
} from "../../../services/apiSlice";
import Column from "../Column";
import HeaderColumns from "../headerColumns.tsx/HeaderColumns";
import Container from "react-bootstrap/Container";
import { addDaysToEmptyColumns } from "../utils";
import useURLValues from "../../../hooks/useURLValues";

const Columns = () => {
  const { monthURL, yearFromURL, monthFromURL } = useURLValues();

  const { data: month } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });
  const [updateColumns] = useUpdateColumnsMutation();
  const columnsWithDays = addDaysToEmptyColumns(month?.columns);

  const [columns, setColumns] = useState<any[]>([]);
  const [results, setResults] = useState(null);

  useEffect(() => {
    setColumns(columnsWithDays);
  }, [month, monthURL]);

  const handleDragEnd = (results: any) => {
    handleDragDrop(results, columns, setColumns);
    setResults(results);
  };

  useEffect(() => {
    if (results !== null) {
      updateColumns({
        year: yearFromURL,
        month: monthFromURL,
        columnsBody: columns,
      });
    }
  }, [results]);

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
          <DragDropContext onDragEnd={handleDragEnd}>
            {columns?.map((column: any) => {
              return <Column column={column} key={column.id} />;
            })}
          </DragDropContext>
        </Container>
      </main>
    </>
  );
};

export default Columns;
