import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import {
  useDeleteAllColumnsMutation,
  useColumnsQuery,
  useUpdateColumnsMutation,
} from "../../services/apiSlice";
import Column from "./Column";
import HeaderInPanel from "./HeaderInPanel";
import { handleDragDrop, addDaysToEmptyColumns } from "./utils";
import DayForm from "./dayForm/DayForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";


const IndexHoursPanel = () => {
  const { data, error } = useColumnsQuery(undefined);
  const [deleteAllColumns, isLoading] = useDeleteAllColumnsMutation();
  const [updateColumns, success] = useUpdateColumnsMutation();
  const { numberOfDays } = useSelector((state: RootState) => state.hoursPanel);

  const columnsFromDatabase = data && Object.values(data).flat();
  const columnsToPrint = addDaysToEmptyColumns(columnsFromDatabase);
  const [columns, setColumns] = useState([]);

  const columnsId = data && Object.keys(data).join();
  const columnsToUpdate = { id: columnsId, columns: columns };

  useEffect(() => {
    setColumns(columnsToPrint);
  }, [data]);

  useEffect(() => {
    updateColumns(columnsToUpdate);
  }, [columns]);

  return (
    <>
      <HeaderInPanel />
      <DayForm />
      <div style={{ display: "flex" }}>
        <p>wszystkie godziny: {numberOfDays}</p>
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
    </>
  );
};

export default IndexHoursPanel;
