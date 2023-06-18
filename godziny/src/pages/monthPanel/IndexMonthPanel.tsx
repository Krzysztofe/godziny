import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import IndexSidebar from "../../components/sidebar/IndexSidebar";
import {
  useColumnsQuery,
  useUpdateColumnsMutation,
} from "../../services/apiSlice";
import Column from "./Column";
import HeaderMonthPanel from "./headerMonthPanel/HeaderMonthPanel";
import useDataBaseValues from "./hooksMonthPanel/useDataBaseValues";
import { handleDragDrop } from "./utils";
import DayForm from "../../components/sidebar/dayForm/DayForm";
import Nav from "react-bootstrap/Nav";

const IndexMonthPanel = () => {
  const { data, error } = useColumnsQuery(undefined);
  const [updateColumns, succes] = useUpdateColumnsMutation();
  const { monthURL } = useParams();

  const {
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

  const [columns, setColumns] = useState<any[]>([]);

  useEffect(() => {
    data && databaseMonth && setColumns(databaseColumns);
  }, [data, monthURL]);

  // console.log("columns", columns);
  // console.log("database", databaseColumns);

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
  }, [columns, databaseAllHours]);

  let columnsContent = !succes.isError ? (
    <div>
      <div>
        <DragDropContext
          onDragEnd={results => handleDragDrop(results, columns, setColumns)}
        >
          <div style={{ display: "flex" }}>
            {[
              { header: "Złożone:", counter: dataBaseSubmitedHours },
              { header: "Zakceptowane:", counter: databaseAcceptedHours },
              { header: "Odrzucone:", counter: databaseRejectedHours },
            ].map(({ header, counter }) => {
              return (
                <h6 key={header} style={{ marginLeft: 20, width: "20vw" }}>
                  {header} {""}
                  {counter}
                </h6>
              );
            })}
          </div>

          <div style={{ display: "flex" }}>
            {columns &&
              columns.length > 0 &&
              columns.map((column: any, idx: any) => {
                return <Column column={column} key={column.id} />;
              })}
          </div>
        </DragDropContext>
      </div>
    </div>
  ) : (
    <div>Błąd</div>
  );

  if (error) {
    if ("error" in error)
      columnsContent = (
        <div style={{ textAlign: "center" }}> {error.error} </div>
      );
  }
  // console.log("", databaseMonth);
  return (
    <>
      {databaseMonth === undefined || databaseMonth === null ? (
        <div style={{ textAlign: "center" }}>Brak danych, wybierz miesiąc</div>
      ) : (
        <div style={{ display: "flex", marginLeft: "30vw" }}>
          <div>
            <HeaderMonthPanel /> 
             {columnsContent}
          </div>
        </div>
      )}
    </>
  );
};

export default IndexMonthPanel;
