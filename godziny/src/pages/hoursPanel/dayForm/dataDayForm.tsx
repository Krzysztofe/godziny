export const initialValues = {
  id: crypto.randomUUID(),
  date: "",
  hours: "",
  userName: "",
  place: "",
};

interface DayModel {
  id?: string;
  userName: string;
  date: string;
  hours: string | number;
  place: string;
}

interface ColumnModel {
  id: string;
  columnName: string;
  days?: any;
}

const columns: ColumnModel[] = [
  {
    id: "miesiac",
    columnName: "Miesiąc",
    days: [],
  },
  {
    id: "oczekujące",
    columnName: "Oczekujące",
  },
  {
    id: "zatwierdzone",
    columnName: "Zatwierdzone",
  },
];

export const addedColumnsWithDays = {
  id: "",
  month: "",
  allHours: 44,
  currentHours: 0,
  submitedHours: 0,
  acceptedHours: 0,
  rejectedHours: 0,
  columns: columns,
};
