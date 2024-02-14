import { ListGroup } from "react-bootstrap";
import { dataStylesListItem } from "../../../components/listContainer/stylesListContainer";
import { useUsersQuery } from "../../../services/apiSliceUsers";
import ButtonDeleteUser from "./buttonDeleteUser/ButtonDeleteUser";

const ListUsers = () => {
  const { data: listUsers } = useUsersQuery();

  return (
    <>
      {listUsers?.map(user => {
        return (
          <ListGroup.Item
            key={user.userName}
            className={`${dataStylesListItem} d-flex`}
            style={{
              borderLeft: `8px solid ${user.userColor}`,
              color: user.userColor,
            }}
          >
            <div className="ms-2">{user.userName}</div>
            <ButtonDeleteUser user={user} />
          </ListGroup.Item>
        );
      })}
    </>
  );
};

export default ListUsers;
