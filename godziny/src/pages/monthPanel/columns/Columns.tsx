import { useEffect, useRef, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import useMonthQuery from "../../../hooks/useMonthQuery";
import { ModelColumn } from "../../../sharedModels/modelColumn";
import Column from "../column/Column";
import "./_columns.scss";
import useUpdateMonth from "./hooks/useUpdateMonth";
import { handleDragDrop } from "./utils/utilsHandleDragDrop";
import { playDragSound } from "./utils/utilsPlayDragSound";

const click = require("../../../asets/dragSound.wav");

const Columns = () => {
  const { data: month } = useMonthQuery();

  const [columns, setColumns] = useState<ModelColumn[]>([]);
  const [executeUpdateMonth, setExecuteUpdateMonth] = useState(false);
  const audioElem = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (month) {
      const newColumns = [
        { id: "submitted", days: month.columns.submitted },
        { id: "accepted", days: month.columns.accepted },
        { id: "rejected", days: month.columns.rejected },
      ];

      setColumns(newColumns);
    }
  }, [month]);

  useUpdateMonth(columns, executeUpdateMonth);

  const handleDragEnd = (e: DropResult) => {
    month && handleDragDrop(e, columns, setColumns);
    setExecuteUpdateMonth((prev) => !prev);
    playDragSound(e, audioElem);
  };

  return (
    <>
      <audio src={click} ref={audioElem}></audio>
      <div className="_d-between _dragDropContex">
        <DragDropContext onDragEnd={handleDragEnd}>
          {columns?.map((column, idx) => {
            return <Column key={column.id} columnIdx={idx} column={column} />;
          })}
        </DragDropContext>
      </div>
    </>
  );
};

export default Columns;
