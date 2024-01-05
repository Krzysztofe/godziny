import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ButtonDeleteUser from "./buttonDeleteDay/ButtonDeleteDay";
import { dataStylesListGroupItem } from "./dataStylesSettingsLists";

const ListUsers = () => {
  const { listUsers } = useSelector((state: RootState) => state.listUsers);

  return (
    <>
      {listUsers?.map(user => {
        return (
          <ListGroup.Item
            key={user.userName}
            className={dataStylesListGroupItem}
            style={{
              backgroundColor: user.userColor,
              overflow: "hidden",
            }}
          >
            <ButtonDeleteUser user={user} />
          </ListGroup.Item>
        );
      })}
    </>
  );
};

export default ListUsers;
