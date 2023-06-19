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
    days: [null],
  },
  {
    id: "zatwierdzone",
    columnName: "Zatwierdzone",
    days: [null],
  },
];

export const monthPattern = {
  id: "",
  month: "",
  allHours: 0,
  currentHours: 0,
  submitedHours: 0,
  acceptedHours: 0,
  rejectedHours: 0,
  columns: columns,
};