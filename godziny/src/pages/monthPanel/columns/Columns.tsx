import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { RootState } from "../../../redux/store";
import { ModelColumn } from "../../../sharedModels/modelColumn";
import Column from "../Column";
import ColumnsHeader from "../columnsHeader.tsx/ColumnsHeader";
import useScrollThumbPosition from "./hooks/useScrollThumbPosition";
import useUpdateColumns from "./hooks/useUpdateColumns";
import useUpdateMonth from "./hooks/useUpdateMonth";
import { handleDragDrop } from "./utils/utilsHandleDragDrop";

const rowStyles = "d-flex justify-content-between";

const Columns = () => {
  const { scrollableRef, thumbPosition, handleScroll } =
    useScrollThumbPosition();
  const { windowWidth } = useWindowWidth();
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
      className="overflow-y-scroll h-100"
      style={{
        maxHeight:
          windowWidth >= 500
            ? "calc(100% - 32px)"
            : "calc(100% - 32px - 2.5rem)",
      }}
    >
      <div className={`display-between sticky-top`}>
        <ColumnsHeader thumbPosition={thumbPosition} />
      </div>

      <div
        className={`${rowStyles}`}
        style={{ minHeight: "calc(100% - 35px)" }}
      >
        <DragDropContext onDragEnd={handleDragEnd}>
          {columns?.map((column: ModelColumn, idx: number) => {
            return <Column key={column.id} columnIdx={idx} />;
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Columns;
