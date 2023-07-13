import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import {
  useDeleteUserMutation,
  useUsersQuery,
} from "../../services/apiSliceUsers";
import { ModelUser } from "./settingsUserForm/useSettingsUserFormik";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const SettingsUsersList = () => {
  const { data: dataUsers } = useUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id: string) => {
    const usersBodyPUTRequest = dataUsers?.filter((user: ModelUser) => {
      return user.id !== id;
    });

    await deleteUser(usersBodyPUTRequest);
  };

  return (
    <>
      <h3 className="h4">Lista urzytkowników</h3>
      <ListGroup className="border border-primary  pe-0 monthListContainer">
        {!dataUsers ? (
          <p className="py-1 px-2 fs-4 text-warning">Brak danych</p>
        ) : (
          dataUsers?.map(({ userName, userColor, id }: any) => {
            return (
              <ListGroup.Item
                key={id}
                onClick={() => handleDelete(id)}
                className="border-0 p-0 px-1 fs-4 text-decoration-none text-capitalize  d-flex justify-content-between align-items-center"
                style={{ color: userColor }}
              >
                {userName}
                <Button className="w-25">
                  <RiDeleteBin6Line className="text-danger fs-4" />
                </Button>
              </ListGroup.Item>
            );
          })
        )}
      </ListGroup>
    </>
  );
};

export default SettingsUsersList;
