// interface DayModel {
//   id: string;
//   content: string;
// }

interface ColumnModel {
  id: string;
  columnName: string;
  days?: any;
}

export const columnsWithDays: ColumnModel[] = [
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
