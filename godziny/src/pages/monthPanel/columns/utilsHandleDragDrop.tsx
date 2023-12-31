import { ModelColumn } from "../../../sharedModels/modelColumn";
import { ModelDay } from "../../../sharedModels/modelDay";

const findSourceColumnIdx = (columns: ModelColumn[], source: any) => {
  return columns?.findIndex((column: ModelColumn) => {
    return column.id === source.droppableId;
  });
};

const findDestinationColumnIdx = (columns: ModelColumn[], destination: any) => {
  return columns?.findIndex((column: ModelColumn) => {
    return column.id === destination.droppableId;
  });
};

const findDeletedDay = (newSourceDays: ModelDay[], source: any) => {
  const [deletedDay] = newSourceDays.splice(source.index, 1);
  return deletedDay;
};

const moveItemFromColumn = (
  columns: ModelColumn[],
  source: any,
  destination: any,
  setColumns: React.Dispatch<React.SetStateAction<ModelColumn[]>>
) => {
  const sourceColumnIdx = findSourceColumnIdx(columns, source);
  const destinationColumnIdx = findDestinationColumnIdx(columns, destination);
  const newSourceDays = columns && [...columns[sourceColumnIdx].days];
  const newDestinationDays =
    source.droppableId !== destination.dropableId
      ? [...columns[destinationColumnIdx].days]
      : newSourceDays;

  const deletedDay = findDeletedDay(newSourceDays, source);
  newDestinationDays.splice(destination.index, 0, deletedDay);

  const newColumns = [...columns];

  newColumns[sourceColumnIdx] = {
    ...columns[sourceColumnIdx],
    days: newSourceDays,
  };

  newColumns[destinationColumnIdx] = {
    ...columns[destinationColumnIdx],
    days: newDestinationDays,
  };

  setColumns(newColumns);
};

const moveItemInColumn = (
  columns: ModelColumn[],
  source: any,
  destination: any,
  setColumns: React.Dispatch<React.SetStateAction<ModelColumn[]>>
) => {
  const destintionIdx = destination.index;
  const sourceColumnIdx = findSourceColumnIdx(columns, source);

  const days = [...columns[sourceColumnIdx].days];

  const deletedDay = findDeletedDay(days, source);
  days.splice(destintionIdx, 0, deletedDay);

  const newColumns = [...columns];

  newColumns[sourceColumnIdx] = {
    ...columns[sourceColumnIdx],
    days: days,
  };

  setColumns(newColumns);
};

export const handleDragDrop = (
  results: any,
  columns: ModelColumn[],
  setColumns: React.Dispatch<React.SetStateAction<ModelColumn[]>>
) => {
  const { source, destination } = results;

  if (!destination) return;
  if (
    source.draggableId === destination.droppableId &&
    source.index !== destination.index
  )
    return;

  if (source.droppableId === "rejected") return;

  if (source.droppableId !== destination.droppableId) {
    moveItemFromColumn(columns, source, destination, setColumns);
  } else {
    moveItemInColumn(columns, source, destination, setColumns);
  }
};
