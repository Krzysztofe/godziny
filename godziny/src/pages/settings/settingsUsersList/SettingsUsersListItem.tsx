import Swal from "sweetalert2";
import {
  useDeleteUserMutation,
  useUsersQuery,
} from "../../../services/apiSliceUsers";
import useHTTPState from "../../../hooks/useHTTPState";
import { RiDeleteBin6Line } from "react-icons/ri";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { ModelUser } from "../settingsUserForm/useSettingsUserFormik";
import { alertHelper } from "../../../utils/alertHelpers";

interface Props {
  user: ModelUser;
}

const SettingsUsersListItem = (props: Props) => {
  const { data: dataUsers } = useUsersQuery();
  const [deleteUser, success] = useDeleteUserMutation();
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
  );

  const users = dataUsers && dataUsers?.length > 0 ? dataUsers : [];

  const handleDelete = async (id: string) => {
    Swal.fire(alertHelper("Chcesz usuniąć użytkownika?")).then(async result => {
      if (result.isConfirmed) {
        const userBodyPUTRequest = users?.filter((user: ModelUser) => {
          return user?.id !== id;
        });

        await deleteUser(userBodyPUTRequest);
      }
    });
  };

  return (
    <ListGroup.Item
      onClick={() => handleDelete(props.user.id)}
      className="border-0 p-0"
      style={{ color: props.user.userColor }}
    >
      <Button
        disabled={success.isLoading}
        className="w-100 d-flex justify-content-between align-items-center px-1 bg-primary-subtle text-capitalize border-0 fs-5"
        style={{ color: props.user.userColor }}
      >
        {props.user.userName}
        {btnContent}
      </Button>
    </ListGroup.Item>
  );
};

export default SettingsUsersListItem;
