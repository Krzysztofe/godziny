import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { dataStylesListGroupItem } from "../dataStylesSettingsLists";
import ButtonDeleteUser from "../buttonDeleteUser/ButtonDeleteUser";

const ListUsers = () => {
  const { listUsers } = useSelector((state: RootState) => state.listUsers);

  return (
    <>
      {listUsers?.map(user => {
        return (
          <ListGroup.Item
            key={user.userName}
            className={`${dataStylesListGroupItem}  _radius`}
            style={{
              borderLeft: `8px solid ${user.userColor}`,
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
