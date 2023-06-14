import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import {
  useColumnsQuery,
  useUpdateColumnsMutation,
} from "../../services/apiSlice";
import Column from "./Column";
import HeaderInPanel from "./HeaderInPanel";
import DayForm from "./dayForm/DayForm";
import IndexSidebar from "./sidebar/IndexSidebar";
import useDataBaseValues from "./useDataBaseValues";
import { handleDragDrop } from "./utils";

const IndexHoursPanel = () => {

  const { data, error } = useColumnsQuery(undefined);
  const [updateColumns, succes] = useUpdateColumnsMutation();
  const { monthValue } = useParams();

  const {
    databaseAllHours,
    databaseAcceptedHours,
    databaseRejectedHours,
    dataBaseSubmitedHours,
    databaseMonth,
    submitedHoursSum,
    acceptedHoursSum,
    rejectedHoursSum,
  } = useDataBaseValues(monthValue);

  const [columns, setColumns] = useState<any[]>([]);

  useEffect(() => {
    data && setColumns(databaseMonth?.columns);
  }, [data, monthValue]);

  useEffect(() => {
    data &&
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
  }, [
    columns,
    submitedHoursSum,
    acceptedHoursSum,
    rejectedHoursSum,
  ]);

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
                <h4 key={header} style={{ marginLeft: 20, width: "20vw" }}>
                  {header} {""}
                  {counter} godz.
                </h4>
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

  return (
    <div style={{ display: "flex" }}>
      <IndexSidebar />
      <div>
        <HeaderInPanel />
        <DayForm />
        {columnsContent}
      </div>
    </div>
  );
};

export default IndexHoursPanel;
