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

const IndexHoursPanel = () => {
  const { data, error } = useColumnsQuery(undefined);
  const [deleteAllColumns, isLoading] = useDeleteAllColumnsMutation();
  const [updateColumns, success] = useUpdateColumnsMutation();

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

      <div style={{ display: "flex" }}>
        <DragDropContext
          onDragEnd={results => handleDragDrop(results, columns, setColumns)}
        >
          {columns &&
            columns.length > 0 &&
            columns.map((column: any, idx:any) => {
              return <Column column={column} key={column.id}  columnIdx = {idx}/>;
            })}
        </DragDropContext>
      </div>
    </>
  );
};

export default IndexHoursPanel;
