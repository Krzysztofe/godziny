import { DragDropContext } from "react-beautiful-dnd";
import { handleDragDrop } from "../utils";
import useDataBaseValues from "../useDataBaseValues";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUpdateMonthMutation } from "../../../services/apiSlice";
import Column from "../Column";
import "./_columns.scss";
import HeaderColumns from "../headerColumns.tsx/HeaderColumns";

const Columns = () => {
  const { monthURL } = useParams();
  const {
    data,
    error,
    databaseAllHours,
    databaseColumns,
    databaseAcceptedHours,
    databaseRejectedHours,
    dataBaseSubmitedHours,
    databaseMonth,
    submitedHoursSum,
    acceptedHoursSum,
    rejectedHoursSum,
  } = useDataBaseValues(monthURL);

  const [updateColumns, succes] = useUpdateMonthMutation();

  const [columns, setColumns] = useState<any[]>([]);
  useEffect(() => {
    data && databaseMonth && setColumns(databaseColumns);
  }, [data, monthURL]);

  useEffect(() => {
    data &&
      columns?.length > 1 &&
      databaseMonth?.month &&
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
  }, [columns]);

  return (
    <DragDropContext
      onDragEnd={results => handleDragDrop(results, columns, setColumns)}
    >
      <section className="monthColumns">
        <HeaderColumns />
        <div className="d-flex grid gap-0 column-gap-2" style={{height:"fit-content"}}>
          {columns &&
            columns.length > 0 &&
            columns.map((column: any, idx: any) => {
              return <Column column={column} key={column.id} />;
            })}
        </div>
      </section>
    </DragDropContext>
  );
};

export default Columns;
