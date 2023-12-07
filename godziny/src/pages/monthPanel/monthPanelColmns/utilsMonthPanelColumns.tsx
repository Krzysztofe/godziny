import { ModelColumn } from "../../../sharedModels/modelColumn";

export const addDaysToColumns = (columns: ModelColumn[]) => {
  if (!Array.isArray(columns)) {
    return [];
  }
  return columns?.map((column: ModelColumn) => {
    if (!column?.hasOwnProperty("days")) {
      return { ...column, days: [] };
    }
    return column;
  });
};

export const handleDragDrop = (
  results: any,
  currentHours: number,
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

  const hoursInDay = columns[2]?.days[source.index]?.hours;
  if (source.droppableId === "rejected" && currentHours < hoursInDay) return;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumnIdx = columns?.findIndex((column: ModelColumn) => {
      return column.id === source.droppableId;
    });

    const destinationColumnIdx = columns?.findIndex((column: ModelColumn) => {
      return column.id === destination.droppableId;
    });

    const newSourceDays = columns && [...columns[sourceColumnIdx].days];

    const newDestinationDays =
      source.droppableId !== destination.dropableId
        ? [...columns[destinationColumnIdx].days]
        : newSourceDays;

    const [deletedDay] = newSourceDays.splice(source.index, 1);
    newDestinationDays.splice(destination.index, 0, deletedDay);

    const newCoulmns = [...columns];

    newCoulmns[sourceColumnIdx] = {
      ...columns[sourceColumnIdx],
      days: newSourceDays,
    };

    newCoulmns[destinationColumnIdx] = {
      ...columns[destinationColumnIdx],
      days: newDestinationDays,
    };

    setColumns(newCoulmns);
  } else {
    const destintionIdx = destination.index;

    const sourceColumnIdx = columns.findIndex((column: ModelColumn) => {
      return column.id === source.droppableId;
    });

    const days = [...columns[sourceColumnIdx].days];
    const [deletedDay] = days.splice(source.index, 1);
    days.splice(destintionIdx, 0, deletedDay);

    const newColumns = [...columns];

    newColumns[sourceColumnIdx] = {
      ...columns[sourceColumnIdx],
      days: days,
    };

    setColumns(newColumns);
  }
};
