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




// const columnsWithDays = [
//   {
//     id: "miesiac",
//     columnName: "Miesiąc",
//     days: [
//       {
//         content: "1",
//         date: "",
//         hours: 0,
//         id: "40e4e6b4-4c37-4df4-8015-2394f0806492",
//         location: "",
//         userName: "",
//       },
//       {
//         content: "2",
//         date: "",
//         hours: 0,
//         id: "40e4e6b4-4c37-4df4-8015-2394f0806498",
//         location: "",
//         userName: "",
//       },
//       {
//         content: "3",
//         date: "",
//         hours: 0,
//         id: "40e4e6b4-4c37-4df4-8015-2394f0806490",
//         location: "",
//         userName: "",
//       },
//     ],
//   },
//   {
//     id: "oczekujące",
//     columnName: "Oczekujące",
//     days: [
//       {
//         content: "1",
//         date: "",
//         hours: 0,
//         id: "40e4e6b4-4c37-4df4-8015-2394f08064926",
//         location: "",
//         userName: "",
//       },
//       {
//         content: "2",
//         date: "",
//         hours: 0,
//         id: "40e4e6b4-4c37-4df4-8015-2394f08064987",
//         location: "",
//         userName: "",
//       },
//       {
//         content: "3",
//         date: "",
//         hours: 0,
//         id: "40e4e6b4-4c37-4df4-8015-2394f08064909",
//         location: "",
//         userName: "",
//       },
//     ],
//   },
//   {
//     id: "zatwierdzone",
//     columnName: "Zatwierdzone",
//     days: [
//       {
//         content: "1",
//         date: "",
//         hours: 0,
//         id: "40e4e6b4-4c37-4df4-8015-2394f080649",
//         location: "",
//         userName: "",
//       },
//       {
//         content: "2",
//         date: "",
//         hours: 0,
//         id: "40e4e6b4-4c37-4df4-8015-2394f080649",
//         location: "",
//         userName: "",
//       },
//       {
//         content: "3",
//         date: "",
//         hours: 0,
//         id: "40e4e6b4-4c37-4df4-8015-2394f080649",
//         location: "",
//         userName: "",
//       },
//     ],
//   },
// ];


