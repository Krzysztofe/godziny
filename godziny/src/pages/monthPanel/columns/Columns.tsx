import { useRef, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ModelColumn } from "../../../sharedModels/modelColumn";
import Column from "../column/Column";
import "./_columns.scss";
import usePlaySound from "./hooks/usePlaySound";
import useUpdateColumns from "./hooks/useUpdateColumns";
import useUpdateMonth from "./hooks/useUpdateMonth";
import { handleDragDrop } from "./utils/utilsHandleDragDrop";
import { playClickSound } from "./hooks/usePlaySound";
const click = require("../../../asets/dragSound.wav");

const Columns = () => {
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const [columns, setColumns] = useState<ModelColumn[]>([]);
  const [executeUpdateMonth, setExecuteUpdateMonth] = useState(false);
  const [event, setEvent] = useState<DropResult | null>(null);
  const audioElem = useRef<HTMLAudioElement>(null);
  // usePlaySound(audioElem, columns[1]?.days.length, month?.id, event);
  useUpdateColumns(setColumns);
  useUpdateMonth(columns, executeUpdateMonth);

  const handleDragEnd = (e: DropResult) => {
    month && handleDragDrop(e, columns, setColumns);
    setExecuteUpdateMonth(prev => !prev);
     playClickSound(e, audioElem);
     setEvent(e);
     console.log('',e)
  };

  return (
    <>
      <audio src={click} ref={audioElem}></audio>

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
