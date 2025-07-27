import { useSelector } from "react-redux";
import BorderInline from "../../../components/BorderInline";
import ListContainer from "../../../components/listContainer/ListContainer";
import { RootState } from "../../../redux/store";
import { useUsersQuery } from "../../../services/apiSliceUsers";
import ListMonths from "../listMonths/ListMonths";
import ListUsers from "../listUsers/ListUsers";
import "./_settingsContent.scss";


import HeaderList from "../../../components/HeaderList";
import { useAllMonthsQuery } from "../../../services/apiSliceMonths";

const SettingsContent = () => {
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

  const { data: months } = useAllMonthsQuery();

  const { data: listUsers } = useUsersQuery();

  return (
    <>
      <div className="_settingsContent pb-4">
        <BorderInline />
        <HeaderList header={"Zapisane miesiące"} listContent={listMonths} />
        <ListContainer listContent={months}>
          <ListMonths />
        </ListContainer>
        <HeaderList header={"Zapisani użytkownicy"} listContent={listUsers} />
        <ListContainer listContent={listUsers}>
          <ListUsers />
        </ListContainer>
      </div>
    </>
  );
};

export default SettingsContent;
