interface ModelDay {
  id?: string;
  userName: string;
  date: string;
  hours: string | number;
  place: string;
}

interface ModelColumn {
  id: string;
  columnName: string;
  days?: ModelDay[];
}

const columns: ModelColumn[] = [
  {
    id: "miesiac",
    columnName: "Miesiąc",
    days: [],
  },
  {
    id: "oczekujące",
    columnName: "Oczekujące",
    days: [],
  },
  {
    id: "zatwierdzone",
    columnName: "Zatwierdzone",
    days: [],
  },
];

export const monthPattern = {
  id: "",
  monthDate: "",
  allHours: 0,
  currentHours: 0,
  submitedHours: 0,
  acceptedHours: 0,
  rejectedHours: 0,
  columns: columns,
};
