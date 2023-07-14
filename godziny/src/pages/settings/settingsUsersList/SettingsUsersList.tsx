import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ModelUser } from "../settingsUserForm/useSettingsUserFormik";
import SettingsUsersListItem from "./SettingsUsersListItem";

const SettingsUsersList = () => {
  const { users } = useSelector((state: RootState) => state.users);

  return (
    <>
      <h3 className="h4">Usuń użytkownika</h3>
      <ListGroup className="border-0 bg-primary-subtle p-0">
        {!users ? (
          <p className="py-1 px-2 fs-4 text-warning">Brak danych</p>
        ) : (
          users?.map((user: ModelUser) => {
            return <SettingsUsersListItem user={user} key={user.id} />;
          })
        )}
      </ListGroup>
    </>
  );
};

export default SettingsUsersList;
