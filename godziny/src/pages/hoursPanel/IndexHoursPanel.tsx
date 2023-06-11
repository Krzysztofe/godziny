import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Column from "./Column";
import HeaderInPanel from "./HeaderInPanel";
import DayForm from "./dayForm/DayForm";
import useDataBaseValues from "./useDataBaseValues";
import { handleDragDrop } from "./utils";

const IndexHoursPanel = () => {
  const { numberOfDays } = useSelector((state: RootState) => state.hoursPanel);

  const {
    databaseColumnsId,
    databaseAllHours,
    dataCurrentHours,
    dataBaseSubmitedHours,
    databaseColumns,
    submitedHoursSum,
    data,
    updateColumns,
  } = useDataBaseValues();


  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns(databaseColumns);
  }, [data]);

  useEffect(() => {
    databaseColumnsId &&
      updateColumns({
        id: databaseColumnsId,
        columns: {
          allHours: databaseAllHours,
          currentHours: databaseAllHours - submitedHoursSum,
          submitedHours: submitedHoursSum,
          columns: columns,
        },
      });
  }, [columns, numberOfDays, submitedHoursSum]);

  // console.log("", dataCurrentHours);

  return (
    <>
      <HeaderInPanel />
      <DayForm />
      <div>
        <div>
          <DragDropContext
            onDragEnd={results => handleDragDrop(results, columns, setColumns)}
          >
            <div style={{ display: "flex" }}>
              {[
                { header: "Złożone", counter: dataBaseSubmitedHours },
                { header: "Zakceptowane", counter: 0 },
                { header: "Odrzucone", counter: 0 },
              ].map(({ header, counter }) => {
                return (
                  <h4 key={header} style={{ marginLeft: 20, width: "30vw" }}>
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
    </>
  );
};

export default IndexHoursPanel;
