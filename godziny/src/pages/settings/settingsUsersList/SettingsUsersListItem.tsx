import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import useHTTPState from "../../../hooks/useHTTPState";
import { RootState } from "../../../redux/store";
import {
  useDeleteUserMutation
} from "../../../services/apiSliceUsers";
import { alertHelper } from "../../../utils/alertHelpers";
import { ModelUser } from "../settingsUserForm/useSettingsUserFormik";

interface Props {
  user: ModelUser;
}

const SettingsUsersListItem = (props: Props) => {
  const [deleteUser, success] = useDeleteUserMutation();
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
  );

  const { users } = useSelector((state: RootState) => state.users);

  const handleDelete = async (id: string) => {
    Swal.fire(alertHelper("Chcesz usunąć użytkownika?")).then(async result => {
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
