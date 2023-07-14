import ListGroup from "react-bootstrap/ListGroup";
import { useUsersQuery } from "../../../services/apiSliceUsers";
import SettingsUsersListItem from "./SettingsUsersListItem";
import { ModelUser } from "../settingsUserForm/useSettingsUserFormik";

const SettingsUsersList = () => {
  const { data: dataUsers } = useUsersQuery();

  return (
    <>
      <h3 className="h4">Usuń użytkownika</h3>
      <ListGroup className="border-0 bg-primary-subtle p-0">
        {!dataUsers ? (
          <p className="py-1 px-2 fs-4 text-warning">Brak danych</p>
        ) : (
          dataUsers?.map((user: ModelUser) => {
            return <SettingsUsersListItem user={user} key={user.id} />;
          })
        )}
      </ListGroup>
    </>
  );
};

export default SettingsUsersList;
