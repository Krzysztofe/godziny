import {
  dateInNext_14_Days,
  dateInNext_60_Days,
} from "../../../data/dataCurrentDates";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ModelUser } from "../../../sharedModels/modelUser";

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
      firstOption: `${names.length === 0 ? "Brak danych" : "Imię"}`,
      options: names,
    },
    {
      name: "hours",
      firstOption: "Liczba godzin",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },

    {
      name: "place",
      firstOption: "Lokalizacja",
      options: ["Wewnątrz", "Poza"],
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
