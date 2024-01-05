import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { dataStylesListGroupItem } from "./dataStylesSettingsLists";
import ButtonDeleteUser from "./buttonDeleteUser/ButtonDeleteUser"

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
