
export const createDaysInColumn = (num: number) => {
  let days = [];

  for (let i = 1; i <= num; i++) {
    days.push({ id: crypto.randomUUID(), content: i.toString() });
  }

  return days;
};

export const addDaysToEmptyColumns = (arr: any) => {
  return arr?.map((obj: any) => {
    if (!obj.hasOwnProperty("items")) {
      return { ...obj, items: [] };
    }
    return obj;
  });
};



export const handleDragDrop = (results: any, columns: any, setColumns: any) => {
  const { source, destination } = results;

  if (!destination) return;
  if (
    source.draggableId === destination.droppableId &&
    source.index !== destination.index
  )
    return;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumnIdx = columns.findIndex((column: any) => {
      return column.id === source.droppableId;
    });

    const destinationColumnIdx = columns.findIndex((column: any) => {
      return column.id === destination.droppableId;
    });

    const newSourceDays = [...columns[sourceColumnIdx].items];


    const newDestinationDays =
      source.droppableId !== destination.dropableId
        ? [...columns[destinationColumnIdx].items]
        : newSourceDays;

    const [deletedDay] = newSourceDays.splice(source.index, 1);
    newDestinationDays.splice(destination.index, 0, deletedDay);

    const newCoulmns = [...columns];

    newCoulmns[sourceColumnIdx] = {
      ...columns[sourceColumnIdx],
      items: newSourceDays,
    };

    newCoulmns[destinationColumnIdx] = {
      ...columns[destinationColumnIdx],
      items: newDestinationDays,
    };

    setColumns(newCoulmns);
  } else {
    const destintionIdx = destination.index;

    const sourceColumnIdx = columns.findIndex((column: any) => {
      return column.id === source.droppableId;
    });

    const days = [...columns[sourceColumnIdx].items];
    const [deletedDay] = days.splice(source.index, 1);
    days.splice(destintionIdx, 0, deletedDay);

    const newColumns = [...columns];

    newColumns[sourceColumnIdx] = {
      ...columns[sourceColumnIdx],
      items: days,
    };

    setColumns(newColumns);
  }
};
