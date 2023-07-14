import Swal from "sweetalert2";
import {
  useDeleteUserMutation,
  useUsersQuery,
} from "../../services/apiSliceUsers";
import useHTTPState from "../../hooks/useHTTPState";
import { RiDeleteBin6Line } from "react-icons/ri";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { ModelUser } from "./settingsUserForm/useSettingsUserFormik";
import { alertHelper } from "../../utils/alertHelpers";

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

  const handleDelete = async (id: string) => {
    Swal.fire(alertHelper("Chcesz usuniąć użytkownika?")).then(async result => {
      if (result.isConfirmed) {
        const usersBodyPUTRequest = dataUsers?.filter((user: ModelUser) => {
          return user.id !== id;
        });

        await deleteUser(usersBodyPUTRequest);
      }
    });
  };

  return (
    <ListGroup.Item
      onClick={() => handleDelete(props.user.id)}
      // className="border-0 p-0 px-1 "
      style={{ color: props.user.userColor }}
    >
      <Button
        disabled={success.isLoading}
        // className=" bg-transparent border-0"
      >
        {props.user.userName}
        {btnContent}
      </Button>
    </ListGroup.Item>
  );
};

export default SettingsUsersListItem;
