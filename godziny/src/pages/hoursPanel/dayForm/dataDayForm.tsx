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
  days?: DayModel[];
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
  allHours: 0,
  currentHours:0,
  submitedHours: 0,
  acceptedHours:0,
  rejectedHours:0,
  columns: columns,
};

// export const addedColumnsWithDays:ColumnModel[] = [
//   {
//     id: "miesiac",
//     columnName: "Miesiąc",
//     days: [],
//   },
//   {
//     id: "oczekujące",
//     columnName: "Oczekujące",
//   },
//   {
//     id: "zatwierdzone",
//     columnName: "Zatwierdzone",
//   },
// ];


