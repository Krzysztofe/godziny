import { useSelector } from "react-redux";
import ListContainer from "../../../components/listContainer/ListContainer";
import { RootState } from "../../../redux/store";
import ListMonths from "../listMonths/ListMonths";
import ListUsers from "../listUsers/ListUsers";
import "./_settingsContent.scss";
import BorderInline from "../../../components/BorderInline";


const SettinsContent = () => {
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { listUsers } = useSelector((state: RootState) => state.listUsers);

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

export default SettinsContent;
