import useReduxListMonths from "../../../hooks/updateReduxDatabase/useReduxListMonths";
import SettingsMonthsList from "../settingsMonthsList/SettingsMonthsList";
import SettingsUsersList from "../settingsUsersList/SettingsUsersList";
import ListContainer from "../../../components/ListContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ListMonths from "../ListMonths";

const SettinsContent = () => {
  useReduxListMonths();
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

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
        <SettingsUsersList />
      </div>
    </div>
  );
};

export default SettinsContent;
