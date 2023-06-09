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

export const columnsWithAddedDays: ColumnModel[] = [
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
