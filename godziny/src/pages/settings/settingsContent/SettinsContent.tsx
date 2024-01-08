import { useSelector } from "react-redux";
import ListContainer from "../../../components/ListContainer";
import { RootState } from "../../../redux/store";
import ListMonths from "../listMonths/ListMonths";
import ListUsers from "../listUsers/ListUsers";
import "./_settingsContent.scss";

const SettinsContent = () => {
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { listUsers } = useSelector((state: RootState) => state.listUsers);

  return (
    <div className="bg-white p-2 py-4 p-sm-4 w-100 _settinsContent">
      <div className="_settinsContent__wrapper">
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
