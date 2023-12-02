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

export type ModelMonth = {
  id: string;
  columns: ModelColumn[];
  calcHours: ModelCalcHours;
};

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

export const monthPattern: ModelMonth = {
  id: "",
  columns,
  calcHours,
};
