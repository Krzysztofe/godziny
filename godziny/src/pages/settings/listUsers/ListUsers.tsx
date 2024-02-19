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
            className={`${dataStylesListItem} d-flex _overflow-hidden position-relative`}
            style={{
              color: user.userColor,
            }}
          >
            <div
              style={{
                width: "10px",
                height: "100%",
                backgroundColor: `${user.userColor}`,
                position: "absolute",
                top: "0",
                left: "0",
              }}
            ></div>
            <div className="ms-2">{user.userName}</div>
            <ButtonDeleteUser user={user} />
          </ListGroup.Item>
        );
      })}
    </>
  );
};

export default ListUsers;
