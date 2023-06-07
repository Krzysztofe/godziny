import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import {
  useDeleteReactionMutation,
  useReactionsQuery,
  useUpdateReactionMutation,
} from "../../services/apiSlice";
import Column from "./Column";
import HeaderInPanel from "./HeaderInPanel";
import { handleDragDrop, addDaysToEmptyColumns } from "./utils";

const IndexHoursPanel = () => {
  const { data, error } = useReactionsQuery(undefined);
  const columnsFromDatabase = data && Object.values(data).flat();
  const columnsToPrint = addDaysToEmptyColumns(columnsFromDatabase);
  const [deleteReaction, isLoading] = useDeleteReactionMutation();
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns(columnsToPrint);
  }, [data]);

  const [updateReaction, success] = useUpdateReactionMutation();

  const id = data && Object.keys(data).join();
  const columnsToUpdate = { id: id, columns: columns };

  console.log("", columnsToUpdate);

  useEffect(() => {
    updateReaction(columnsToUpdate);
  }, [columns]);

  const handleDelete = async () => {
    const id = data && Object.keys(data).join();
    await deleteReaction(id);
  };

  return (
    <>
      <HeaderInPanel />
      <button onClick={handleDelete}> usuń wszystko</button>
      

      <div style={{ display: "flex" }}>
        <DragDropContext
          onDragEnd={results => handleDragDrop(results, columns, setColumns)}
        >
          {columns &&
            columns.length > 0 &&
            columns.map((column: any) => {
              return <Column column={column} key={column.id} />;
            })}
        </DragDropContext>
      </div>
    </>
  );
};

export default IndexHoursPanel;
