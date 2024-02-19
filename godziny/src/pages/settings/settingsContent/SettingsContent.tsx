import { useSelector } from "react-redux";
import BorderInline from "../../../components/BorderInline";
import ListContainer from "../../../components/listContainer/ListContainer";
import { RootState } from "../../../redux/store";
import { useUsersQuery } from "../../../services/apiSliceUsers";
import ListMonths from "../listMonths/ListMonths";
import ListUsers from "../listUsers/ListUsers";
import "./_settingsContent.scss";
import useDatabaseListMonths from "../../../services/useDatabaseListMonths";

const SettingsContent = () => {
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

  const { data: listUsers } = useUsersQuery();

  return (
    <>
      <div className="_settingsContent pb-4">
        <BorderInline />
        <ListContainer header={"Zapisane miesiące"} listContent={listMonths}>
          <ListMonths />
        </ListContainer>

        <ListContainer header={"Zapisani użytkownicy"} listContent={listUsers}>
          <ListUsers />
        </ListContainer>
      </div>
    </>
  );
};

export default SettingsContent;
