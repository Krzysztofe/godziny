export interface ModelDay {
  id: string;
  userName: string;
  date: string;
  hours: number;
  place: string;
}

export interface ModelColumn {
  id: string;
  days: ModelDay[];
}

export interface ModelCalc {
  allHours: number;
  currentHours: number;
  submittedHours: number;
  acceptedHours: number;
  rejectedHours: number;
}

export interface ModelMonthPattern {
  id: string;
  columns: ModelColumn[];
  calc: ModelCalc;
}

const columns: ModelColumn[] = [
  { id: "submitted", days: [] },
  { id: "accepted", days: [] },
  { id: "rejected", days: [] },
];

const calc: ModelCalc = {
  allHours: 0,
  currentHours: 0,
  submittedHours: 0,
  acceptedHours: 0,
  rejectedHours: 0,
};

export const monthPattern: ModelMonthPattern = {
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
      columns: [
        { id: "zatwierdzone", days: [{ hours: 9 }, null, { hours: 7 }, null] },
        { id: "odrzucone", days: [{ hours: 9 }, null, { hours: 7 }, null] },
        { id: "nara", days: [{ hours: 9 }, null, { hours: 7 }, null] },
      ],
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

const columnsx = [
  { id: "zatwierdzone", days: [{ hours: 9 }, null, { hours: 7 }, null] },
  { id: "odrzucone", days: [{ hours: 9 }, null, { hours: 7 }, null] },
  { id: "nara", days: [{ hours: 9 }, null, { hours: 7 }, null] },
];
