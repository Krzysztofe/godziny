import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ModelUser } from "../../../components/formUser/ModelUser";
import SettingsUsersListItem from "./SettingsUsersListItem";

const SettingsUsersList = () => {
  const { users } = useSelector((state: RootState) => state.users);


console.log('',users)

  return (
    <>
      <h3 className="h6">Zapisani użytkownicy</h3>
      <ListGroup className="border-0 p-0">
        {!users && <p className="py-1 px-2 text-warning">Brak danych</p>}
        {users?.map((user: ModelUser) => {
          return <SettingsUsersListItem user={user} key={user.id} />;
        })}
      </ListGroup>
    </>
  );
};

export default SettingsUsersList;
