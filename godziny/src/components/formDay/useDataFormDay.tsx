import { useUsersQuery } from "../../services/apiSliceUsers";
import { ModelUser } from "../formUser/ModelUser";
import {
  dateInNext_14_Days,
  dateInNext_60_Days,
} from "../../data/dataCurrentDates";

const useDataFormDay = () => {
  const { data: dataUsers } = useUsersQuery();

  const users = dataUsers ? dataUsers : [];

  const names = users?.map(({ userName }: ModelUser) => {
    return userName;
  });

  const dataInputsSelect = [
    {
      name: "userName",
      firstOption: `${names.length === 0 ? "Brak danych" : "Imię"}`,
      label: "Podaj imię",
      options: names,
    },
    {
      name: "hours",
      firstOption: "Godziny",
      label: "Podaj liczbę godzin",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },

    {
      name: "place",
      firstOption: "Lokalizacja",
      label: "Podaj lokalizację",
      options: ["Wewnątrz", "Poza"],
    },
  ];
  const dataInputsText = [
    {
      value: "date",
      label: "Podaj dzień",
      type: "date",
      isErrorPrint: true,
      min: dateInNext_14_Days,
      max: dateInNext_60_Days,
    },
  ];
  return { dataInputsSelect, dataInputsText };
};
export default useDataFormDay;
