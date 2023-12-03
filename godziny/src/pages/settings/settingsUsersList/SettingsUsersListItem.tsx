import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import useHTTPState from "../../../hooks/useHTTPState";
import { RootState } from "../../../redux/store";
import { useDeleteUserMutation } from "../../../services/apiSliceUsers";
import { alertHelper } from "../../../utils/alertHelpers";
import { ModelUser } from "../../../sharedModels/modelUser";


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
    Swal.fire(alertHelper("Usunąć użytkownika?")).then(async result => {
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
      className="shadow-sm p-0 mb-2 ps-2 pe-0 rounded-1"
      style={{ backgroundColor: props.user.userColor, overflow: "hidden" }}
    >
      <Button
        disabled={success.isLoading}
        className="w-100 d-flex justify-content-between align-items-center px-1 text-capitalize rounded-0 bg-white border-0"
        style={{ color: props.user.userColor }}
      >
        {props.user.userName}
        {btnContent}
      </Button>
    </ListGroup.Item>
  );
};

export default SettingsUsersListItem;
