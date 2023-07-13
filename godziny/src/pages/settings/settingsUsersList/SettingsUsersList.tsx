import ListGroup from "react-bootstrap/ListGroup";
import { useUsersQuery } from "../../../services/apiSliceUsers";
import SettingsUsersListItem from "./SettingsUsersListItem";
import { ModelUser } from "../settingsUserForm/useSettingsUserFormik";

const SettingsUsersList = () => {
  const { data: dataUsers } = useUsersQuery();

  return (
    <>
      <h3 className="h4">Lista urzytkowników</h3>
      <ListGroup className="border border-primary bg-white pe-0 monthListContainer">
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
