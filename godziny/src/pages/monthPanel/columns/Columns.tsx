import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { RootState } from "../../../redux/store";
import { ModelColumn } from "../../../sharedModels/modelColumn";
import Column from "../column/Column";
import ColumnsHeader from "../columnsHeader.tsx/ColumnsHeader";
import useScrollThumbPosition from "./hooks/useScrollThumbPosition";
import useUpdateColumns from "./hooks/useUpdateColumns";
import useUpdateMonth from "./hooks/useUpdateMonth";
import { handleDragDrop } from "./utils/utilsHandleDragDrop";
import "./_columns.scss";

const Columns = () => {
  const { scrollableRef, thumbPosition, handleScroll } =
    useScrollThumbPosition();
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
    <div
      ref={scrollableRef}
      onScroll={handleScroll}
      className="overflow-y-scroll h-100 columnsContainer"
    >
      <ColumnsHeader thumbPosition={thumbPosition} />

      <div className="d-between" style={{ minHeight: "calc(100% - 35px)" }}>
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
