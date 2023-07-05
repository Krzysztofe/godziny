interface ModelDay {
  id?: string;
  userName: string;
  date: string;
  hours: string | number;
  place: string;
}

interface ModelColumn {
  id: string;
  days: string;
}

const columns: ModelColumn[] = [
  {
    id: "submitted",
    days: "[]",
  },
  {
    id: "accepted",
    days: "[]",
  },
  {
    id: "rejected",
    days: "[]",
  },
];

const calc = {
  allHours: 0,
  currentHours: 0,
  submitedHours: 0,
  acceptedHours: 0,
  rejectedHours: 0,
};

// export const monthPattern = {
//   id: "",
//   monthDate: "",
//   allHours: 0,
//   currentHours: 0,
//   submitedHours: 0,
//   acceptedHours: 0,
//   rejectedHours: 0,
//   columns: columns,
// };

export const monthPattern = {
  id: "",
  columns,
  calc,
};

const years = {
  2023: {
    month_07: {
      monthDate: "2023-07",
      columns: {},
    },
    month_08: {
      monthDate: "2023-08",
      columns: {},
    },
    month_09: {
      monthDate: "2023-09",
      columns: {},
    },
  },
  2024: {
    month_08: {
      monthDate: "2023-08",
      columns: {},
    },
    month_07: {
      monthDate: "2023-07",
      columns: {},
    },
  },
};
