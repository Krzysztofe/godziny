import { useSelector } from "react-redux";
import ListContainer from "../../../components/ListContainer";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { RootState } from "../../../redux/store";
import ListUsers from "../ListUsers";
import ListMonths from "../listMonths/ListMonths";

const SettinsContent = () => {
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { listUsers } = useSelector((state: RootState) => state.listUsers);
  const { windowWidth } = useWindowWidth();

  return (
    <div
      className="bg-white p-2 py-4 p-sm-4 w-100"
      style={{
        height: windowWidth >= 500 ? "calc(100%)" : "calc(100% - 2.5rem)",
        overflow: "hidden auto",
        outline: "4px solid white",
        scrollbarGutter: "stable",
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
