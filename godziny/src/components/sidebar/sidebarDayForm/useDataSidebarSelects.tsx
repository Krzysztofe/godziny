import { useUsersQuery } from "../../../services/apiSliceUsers";
import { ModelUser } from "../../../pages/settings/settingsUserForm/useSettingsUserFormik";

const useDataSidebarSelects = () => {
  const { data: dataUsers } = useUsersQuery();

  const users = dataUsers ? dataUsers : [];

  const names = users?.map(({ userName }: ModelUser) => {
    return userName;
  });

  const dataSelects = [
    {
      name: "userName",
      firstOption: `${names.length === 0 ? "Zapisz w ustawieniach" : "Imię"}`,
      labelText: "Podaj imię",
      options: names,
    },
    {
      name: "hours",
      firstOption: "Godziny",
      labelText: "Podaj liczbę godzin",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },

    {
      name: "place",
      firstOption: "Lokalizacja",
      labelText: "Podaj lokalizację",
      options: ["Wewnątrz", "Poza"],
    },
  ];

  return { dataSelects };
};
export default useDataSidebarSelects;
