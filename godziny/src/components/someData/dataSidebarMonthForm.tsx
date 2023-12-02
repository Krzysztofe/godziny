export type ModelDay = {
  id: string;
  userName: string;
  userColor: string;
  date: string;
  hours: number;
  place: string;
}

export type ModelColumn = {
  id: string;
  days: ModelDay[];
}

export type ModelCalcHours = {
  allHours: number;
  currentHours: number;
  submittedHours: number;
  acceptedHours: number;
  rejectedHours: number;
};

export type ModelMonthPattern = {
  id: string;
  columns: ModelColumn[];
  calcHours: ModelCalcHours;
};

export type ModelMonthsPatern = {
  [key: string]: {
    [key: string]: ModelMonthPattern
  };
}

const columns: ModelColumn[] = [
  { id: "submitted", days: [] },
  { id: "accepted", days: [] },
  { id: "rejected", days: [] },
];

const calcHours: ModelCalcHours = {
  allHours: 0,
  currentHours: 0,
  submittedHours: 0,
  acceptedHours: 0,
  rejectedHours: 0,
};

export const monthPattern: ModelMonthPattern = {
  id: "",
  columns,
  calcHours,
};
