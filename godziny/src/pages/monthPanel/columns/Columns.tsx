import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ModelColumn } from "../../../sharedModels/modelColumn";
import Column from "../column/Column";
import ColumnsHeader from "../columnsHeader.tsx/ColumnsHeader";
import "./_columns.scss";
import useScrollThumbPosition from "./hooks/useScrollThumbPosition";
import useUpdateColumns from "./hooks/useUpdateColumns";
import useUpdateMonth from "./hooks/useUpdateMonth";
import { handleDragDrop } from "./utils/utilsHandleDragDrop";

const Columns = () => {
  const { scrollableRef, thumbPosition, handleScroll } =
    useScrollThumbPosition();
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const { searchedName } = useSelector((state: RootState) => state.filterDays);

  const [columns, setColumns] = useState<ModelColumn[]>([]);
  const [executeUpdateMonth, setExecuteUpdateMonth] = useState(false);
  useUpdateColumns(setColumns);
  useUpdateMonth(columns, executeUpdateMonth);

  const handleDragEnd = (results: DropResult) => {
    month && handleDragDrop(results, columns, setColumns, searchedName);
    setExecuteUpdateMonth(prev => !prev);
  };

  return (
    <div
      ref={scrollableRef}
      onScroll={handleScroll}
      className="overflow-y-scroll h-100 _columnsContainer"
    >
      <ColumnsHeader thumbPosition={thumbPosition} />

      <div className="_d-between _dragDropContex">
        <DragDropContext onDragEnd={handleDragEnd}>
          {columns?.map((column: ModelColumn, idx: number) => {
            return <Column key={column.id} columnIdx={idx} column={column} />;
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Columns;
