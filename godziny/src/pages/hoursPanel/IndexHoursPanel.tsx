import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useReactionsQuery } from "../../services/apiSlice";
import Column from "./Column";
import HeaderInPanel from "./HeaderInPanel";
import { handleDragDrop } from "./utils";

const IndexHoursPanel = () => {
  const { data, error } = useReactionsQuery(undefined);
  const columnsToPrint = data && Object.values(data).flat();

  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // if (columnsToPrint && columnsToPrint.length > 0) {
    setColumns(columnsToPrint);
    // }
  }, [data]);

  return (
    <>
      <HeaderInPanel />

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
