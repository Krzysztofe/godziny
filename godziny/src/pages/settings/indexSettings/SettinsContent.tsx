import { useSelector } from "react-redux";
import ListContainer from "../../../components/ListContainer";
import useReduxListMonths from "../../../hooks/updateReduxDatabase/useReduxListMonths";
import { RootState } from "../../../redux/store";
import ListMonths from "../settingsLists/ListMonths";
import ListUsers from "../settingsLists/ListUsers";

const SettinsContent = () => {
  useReduxListMonths();
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { listUsers } = useSelector((state: RootState) => state.listUsers);

  return (
    <div
      className="bg-white p-2 py-4 p-sm-4 w-100"
      style={{
        height: "100%",
        overflow: "hidden auto",
        outline: "4px solid white",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          width: "100%",
        }}
      >
        <ListContainer header={"Zapisane miesiące"} listContent={listMonths}>
          <ListMonths />
        </ListContainer>
        <div className="border my-4"></div>

        <ListContainer header={"Zapisani użytkownicy"} listContent={listUsers}>
          <ListUsers />
        </ListContainer>
      </div>
    </div>
  );
};

export default SettinsContent;
