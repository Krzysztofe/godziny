import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { dataStylesListItem } from "../../../components/listContainer/dataListContainerStyles";
import ButtonDeleteUser from "../buttonDeleteUser/ButtonDeleteUser";

const ListUsers = () => {
  const { listUsers } = useSelector((state: RootState) => state.listUsers);

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
