interface DayModel {
  id: string;
  content: string;
}

interface ColumnModel {
  id: string;
  name: string;
  items?: DayModel[] | [];
}

export const columnsWithDays: ColumnModel[] = [
  {
    id: "miesiac",
    name: "miesiac",
    items: [],
  },
  {
    id: "oczekujące",
    name: "oczekujące",
  },
  {
    id: "zatwierdzone",
    name: "zatwierdzone",
  },
];
