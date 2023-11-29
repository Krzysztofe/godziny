export interface ModelDay {
  id: string;
  userName: string;
  userColor: string;
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

export interface ModelMonthsPatern {
  [key: string]: {
    [key: string]: ModelMonthPattern
  };
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
