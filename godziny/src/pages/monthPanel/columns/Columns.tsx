import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ModelColumn } from "../../../sharedModels/modelColumn";
import Column from "../column/Column";
import "./_columns.scss";
import useUpdateColumns from "./hooks/useUpdateColumns";
import useUpdateMonth from "./hooks/useUpdateMonth";
import { handleDragDrop } from "./utils/utilsHandleDragDrop";

const Columns = () => {
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const [columns, setColumns] = useState<ModelColumn[]>([]);
  const [executeUpdateMonth, setExecuteUpdateMonth] = useState(false);
  useUpdateColumns(setColumns);
  useUpdateMonth(columns, executeUpdateMonth);

  const handleDragEnd = (results: DropResult) => {
    month && handleDragDrop(results, columns, setColumns);
    setExecuteUpdateMonth(prev => !prev);
  };

  return (
    <>
      <div className="_d-between _dragDropContex">
        <DragDropContext onDragEnd={handleDragEnd}>
          {columns?.map((column: ModelColumn, idx: number) => {
            return <Column key={column.id} columnIdx={idx} column={column} />;
          })}
        </DragDropContext>
      </div>
    </>
  );
};

export default Columns;
