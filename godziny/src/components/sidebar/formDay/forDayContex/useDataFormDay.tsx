import {
  dateInNext_14_Days,
  dateInNext_60_Days,
} from "../../../../data/dataCurrentDates";
import { ModelUser } from "../../../../sharedModels/modelUser";
import { useUsersQuery } from "../../../../services/apiSliceUsers";

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
      options: names,
      isErrorPrint: true,
    },
    {
      name: "hours",
      firstOption: "Liczba godzin",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      isErrorPrint: true,
    },

    {
      name: "place",
      firstOption: "Lokalizacja",
      options: ["Wewnątrz", "Poza"],
      isErrorPrint: true,
    },
  ];
  const dataInputsText = [
    {
      value: "date",
      type: "date",
      labelCover: "Data",
      isErrorPrint: true,
      min: dateInNext_14_Days,
      max: dateInNext_60_Days,
    },
  ];
  return { dataInputsSelect, dataInputsText };
};
export default useDataFormDay;
