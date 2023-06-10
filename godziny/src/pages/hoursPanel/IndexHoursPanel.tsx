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
    dataBaseAllHours,
    dataBasePendingHours,
    dataBaseColumnsId,
    databaseColumns,
    usersHoursSum,
    data,
    updateColumns,
  } = useDataBaseValues();

  const [allHours, setAllHours] = useState(0);
  const [pendingHours, setPendingHours] = useState(0)
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setAllHours(dataBaseAllHours);
  }, [data]);

 useEffect(() => {
   setPendingHours(dataBasePendingHours);
 }, [data]);


  useEffect(() => {
    setColumns(databaseColumns);
  }, [data]);

  useEffect(() => {
    dataBaseColumnsId &&
      updateColumns({
        id: dataBaseColumnsId,
        columns: {
          allHours: allHours,
          pendingHours: usersHoursSum,
          columns: columns,
        },
      });
  }, [columns, numberOfDays]);

  return (
    <>
      <HeaderInPanel />
      <DayForm />
      <div>
        <p>wszystkie godziny: {dataBaseAllHours - dataBasePendingHours} </p>
        <p>oczekujące godziny: {pendingHours}</p>
        <div style={{ display: "flex" }}>
          <DragDropContext
            onDragEnd={results => handleDragDrop(results, columns, setColumns)}
          >
            {columns &&
              columns.length > 0 &&
              columns.map((column: any, idx: any) => {
                return <Column column={column} key={column.id} />;
              })}
          </DragDropContext>
        </div>
      </div>
    </>
  );
};

export default IndexHoursPanel;
