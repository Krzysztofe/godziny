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






// export const addDaysToColumns = (arr: any[]) => {
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
    const sourceColumnIdx = columns.findIndex((column: any) => {
      return column.id === source.droppableId;
    });

    const destinationColumnIdx = columns.findIndex((column: any) => {
      return column.id === destination.droppableId;
    });

    const newSourceDays = [...columns[sourceColumnIdx].days];

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

const firebasey = {
  uwrahts: {
    allHours: 50,
    columns: [
      {
        name: "ppp",
        id: "22",
        days: [
          { data: "222", name: "olo", hours: 3 },
          { data: "222", name: "olo", hours: 3 },
          { data: "222", name: "olo", hours: 3 },
          { data: "222", name: "olo", hours: 3 },
        ],
      },
      {
        name: "zatwierdzone",
        id: "22",
        days: [
          { data: "222", name: "olo", hours: 3 },
          { data: "222", name: "olo", hours: 20 },
          { data: "222", name: "olo", hours: 3 },
          { data: "222", name: "olo", hours: 3 },
        ],
      },
    ],
  },

  xx: {
    allHours: 50,
    columns: [
      {
        name: "ppp",
        id: "22",
        days: [
          { data: "222", name: "olo", hours: 3 },
          { data: "222", name: "olo", hours: 3 },
          { data: "222", name: "olo", hours: 3 },
          { data: "222", name: "olo", hours: 3 },
        ],
      },
      {
        name: "zatwierdzone",
        id: "22",
        days: [
          { data: "222", name: "olo", hours: 3 },
          { data: "222", name: "olo", hours: 20 },
          { data: "222", name: "olo", hours: 3 },
          { data: "222", name: "olo", hours: 3 },
        ],
      },
    ],
  },
};

// const count = (obj: any) => {
//   const allHours = obj.uwrahts.allHours;

// if (
//   obj &&
//   obj.uwrahts &&
//   obj.uwrahts.columns &&
//   obj.uwrahts.columns.length > 1
// ) {
//   const secondObject = obj.uwrahts.columns[1];
//   if (secondObject && secondObject.days) {
//     return secondObject.days.reduce((sum:any, day:any) => sum + day.hours, 0);
//   }
// }

// return 0;
// };

// console.log("ooo", count(firebasey));
