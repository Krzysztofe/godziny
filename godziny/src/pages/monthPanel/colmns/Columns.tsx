import { DragDropContext } from "react-beautiful-dnd";
import { handleDragDrop } from "../utils";
import useDatabaseValues from "../../../hooks/useMonthURLToString";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

  // console.log("", databaseMonth);

  const [updateColumns, succes] = useUpdateMonthMutation();

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

  return (
    <>
      <main className="mb-2 overflow-y-scroll ">
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
