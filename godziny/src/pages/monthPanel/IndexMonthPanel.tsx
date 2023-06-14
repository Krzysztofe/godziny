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


const IndexMonthPanel = () => {
  const { data, error } = useColumnsQuery(undefined);
  const [updateColumns, succes] = useUpdateColumnsMutation();
  const { monthURL } = useParams();

  const {
    databaseAllHours,
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
    data && setColumns(databaseMonth?.columns);
  }, [data, monthURL]);

  // useEffect(() => {
  //   data &&
  //     databaseMonth?.month &&
  //     updateColumns({
  //       id: data && databaseMonth?.id,
  //       columns: {
  //         ...databaseMonth,
  //         columns: columns,
  //         currentHours:
  //           databaseAllHours -
  //           submitedHoursSum -
  //           acceptedHoursSum -
  //           rejectedHoursSum +
  //           rejectedHoursSum,
  //         submitedHours: submitedHoursSum,
  //         acceptedHours: acceptedHoursSum,
  //         rejectedHours: rejectedHoursSum,
  //       },
  //     });
  // }, [columns, submitedHoursSum, acceptedHoursSum, rejectedHoursSum]);

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
                  {counter} 
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
    <div style={{ margin: "0, auto" }}>
      {/* {data === null ? (
        <div style={{ textAlign: "center" }}>bak danych</div>
      ) : ( */}
        <div style={{ display: "flex", marginLeft: "30vw" }}>
          <div>
            {/* <IndexSidebar /> */}
            <HeaderMonthPanel />
            {columnsContent}
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default IndexMonthPanel;
