import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ModelUser } from "../../../sharedModels/modelUser";

const useDataFilterColumns = () => {
  const { listUsers: dataUsers } = useSelector(
    (state: RootState) => state.listUsers
  );

  const users = dataUsers ? dataUsers : [];

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
export default useDataFilterColumns;
