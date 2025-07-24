import { ModelColumn } from "../../../../sharedModels/modelColumn";
import { ModelDay } from "../../../../sharedModels/modelDay";
import { DropResult } from "react-beautiful-dnd";

const findSourceColumnIdx = (
  columns: ModelColumn[],
  source: { droppableId: string }
) => {
  return columns.findIndex(
    (column: ModelColumn) => column.id === source.droppableId
  );
};

const findDestinationColumnIdx = (
  columns: ModelColumn[],
  destination: { droppableId: string }
) => {
  return columns.findIndex(
    (column: ModelColumn) => column.id === destination.droppableId
  );
};

const findDeletedDay = (newSourceDays: any[], source: { index: number }) => {
  const [deletedDay] = newSourceDays.splice(source.index, 1);
  return deletedDay;
};

const updateColumnDays = (
  columns: ModelColumn[],
  columnIndex: number,
  newDays: ModelDay[]
): ModelColumn[] => {
  const newColumns = [...columns];
  newColumns[columnIndex] = { ...columns[columnIndex], days: newDays };
  return newColumns;
};

const moveItemFromColumn = (
  columns: ModelColumn[],
  source: { droppableId: string; index: number },
  destination: { droppableId: string; index: number },
  setColumns: React.Dispatch<React.SetStateAction<ModelColumn[]>>
) => {
  const sourceColumnIdx = findSourceColumnIdx(columns, source);
  const destinationColumnIdx = findDestinationColumnIdx(columns, destination);
  const newSourceDays = columns && [...columns[sourceColumnIdx].days];
  const newDestinationDays =
    source.droppableId !== destination.droppableId
      ? [...columns[destinationColumnIdx].days]
      : newSourceDays;

  const deletedDay = findDeletedDay(newSourceDays, source);
  newDestinationDays.splice(destination.index, 0, deletedDay);

  const newColumns = updateColumnDays(columns, sourceColumnIdx, newSourceDays);
  setColumns(
    updateColumnDays(newColumns, destinationColumnIdx, newDestinationDays)
  );
};

const moveItemInColumn = (
  columns: ModelColumn[],
  source: { droppableId: string; index: number },
  destination: { droppableId: string; index: number },
  setColumns: React.Dispatch<React.SetStateAction<ModelColumn[]>>
) => {
  const destintionIdx = destination.index;
  const sourceColumnIdx = findSourceColumnIdx(columns, source);

  const days = [...columns[sourceColumnIdx].days];
  const deletedDay = findDeletedDay(days, source);

  days.splice(destintionIdx, 0, deletedDay);

  const newColumns = updateColumnDays(columns, sourceColumnIdx, days);
  setColumns(newColumns);
};

export const handleDragDrop = (
  results: DropResult,
  columns: ModelColumn[],
  setColumns: React.Dispatch<React.SetStateAction<ModelColumn[]>>
) => {
  const { source, destination } = results;

  if (!destination) return;
  if (
    source &&
    destination &&
    source.droppableId === destination.droppableId &&
    source.index === destination.index
  )
    return;

  if (source.droppableId === "rejected") return;

  if (source.droppableId !== destination.droppableId) {
    moveItemFromColumn(columns, source, destination, setColumns);
  } else {
    moveItemInColumn(columns, source, destination, setColumns);
  }
};
