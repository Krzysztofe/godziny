// export const addDaysToEmptyColumns = (arr: any) => {
//   if (!Array.isArray(arr)) {
//     return [];
//   }
//   return arr?.map((obj: any) => {
//     if (!obj?.hasOwnProperty("days")) {
//       return { ...obj, days: [] };
//     }
//     return obj;
//   });
// };


export const addDaysToEmptyColumns = (arr: any) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr?.map((obj: any) => {
    if (!obj?.hasOwnProperty("days")) {
      return { ...obj, days: [] };
    }
    return obj;
  });
};







export const addDaysToColumns = (arr: any[]) => {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr?.map((obj: any) => {
    const hasDaysProperty = obj?.columns?.every((column: any) =>
      column.hasOwnProperty("days")
    );

    if (!hasDaysProperty) {
      return {
        ...obj,
        columns: obj?.columns?.map((column: any) => ({
          ...column,
          days: column.days || [],
        })),
      };
    }

    return obj;
  });
};


// export const addDaysToColumnsvvvvv = (arr: any[]) => {
//   if (!Array.isArray(arr)) {
//     return [];
//   }

//   return arr?.map((obj: any) => {
//     if (obj?.columns?.map((column:any) => column.hasOwnProperty("days"))) {
//       return {
//         ...obj,
//         columns: obj?.columns?.map((column: any) => {
//           return { ...column, days: [] };
//         }),
//       };
//     }

//     return obj
//   });
  
// };


// export const addDaysToColumns = (data:any) => {
//   for (const key in data) {
//     if (data.hasOwnProperty(key)) {
//       const item = data[key];
//       if (item.columns) {
//         item.columns.forEach((column:any) => {
//           if (!column.hasOwnProperty("days")) {
//             column.days = [];
//           }
//         });
//       }
//     }
//   }
// }




export const handleDragDrop = (results: any, columns: any, setColumns: any) => {


  
  const { source, destination } = results;

  if (!destination) return;
  if (
    source.draggableId === destination.droppableId &&
    source.index !== destination.index
  )
    return;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumnIdx = columns?.findIndex((column: any) => {
      return column.id === source.droppableId;
    });

    const destinationColumnIdx = columns?.findIndex((column: any) => {
      return column.id === destination.droppableId;
    });

    const newSourceDays = columns && [...columns[sourceColumnIdx]?.days];

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

    const sourceColumnIdx = columns.findIndex((column: any) => {
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

