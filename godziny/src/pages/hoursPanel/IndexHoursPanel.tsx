import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useReactionsQuery } from "../../services/apiSlice";
import Column from "./Column";
import HeaderInPanel from "./HeaderInPanel";
import { handleDragDrop, addDaysToEmptyColumns } from "./utils";

const IndexHoursPanel = () => {
  const { data, error } = useReactionsQuery(undefined);
  const columnsFromDatabase = data && Object.values(data).flat();
  const columnsToPrint = addDaysToEmptyColumns(columnsFromDatabase);

  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns(columnsToPrint);
  }, [data]);

  return (
    <>
      <HeaderInPanel />
      <button> zatwierdz</button>
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
