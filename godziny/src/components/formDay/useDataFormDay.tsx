import {
  dateInNext_14_Days,
  dateInNext_60_Days,
} from "../../data/dataCurrentDates";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ModelUser } from "../../sharedModels/modelUser";

const useDataFormDay = () => {
  const { listUsers: dataUsers } = useSelector(
    (state: RootState) => state.listUsers
  );

  const users = dataUsers ? dataUsers : [];

  const names = users?.map(({ userName }: ModelUser) => {
    return userName;
  });

  const dataInputsSelect = [
    {
      name: "userName",
      firstOption: `${names.length === 0 ? "Zapisz użytkownika" : "Imię"}`,
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
