import { useSelector } from "react-redux";
import ListContainer from "../../../components/ListContainer";
import { RootState } from "../../../redux/store";
import ListMonths from "../listMonths/ListMonths";
import ListUsers from "../listUsers/ListUsers";
import "./_settingsContent.scss";
import CollapseContainer from "../../../components/collapseContainer/CollapseContainer";
import FormMonthContext from "../../../components/sidebar/formMonth/FormMonthContext";
import FormUserContext from "../../../components/sidebar/formUser/FormUserContext";

const SettinsContent = () => {
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { listUsers } = useSelector((state: RootState) => state.listUsers);

  return (
    <>
      <div className="border d-md-none"></div>

      <div className="_settinsContent">
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
