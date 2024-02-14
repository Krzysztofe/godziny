import { useUsersQuery } from "../../../services/apiSliceUsers";
import { ModelUser } from "../../../sharedModels/modelUser";

const useDataSearch = () => {
  const { data: listUsers } = useUsersQuery();

  const users = listUsers ? listUsers : [];

  const names = users?.map(({ userName }: ModelUser) => {
    return userName;
  });

  const dataInputsSelect = [
    {
      name: "searchedName",
      firstOption: `${names.length === 0 ? "Brak danych" : "Szukaj"}`,
      options: names,
    },
  ];

  return { dataInputsSelect };
};
export default useDataSearch;
