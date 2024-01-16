import { useState } from "react";
import Button from "react-bootstrap/Button";
import useHTTPState from "../../../hooks/useHTTPState";
import useAlertDelete from "../../../hooks/useAlertDelete";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ModelUser } from "../../../sharedModels/modelUser";
import useDeleteUserAsync from "../buttonDeleteUser/useDeleteUserAsync";

type Props = {
  user: ModelUser;
};

const ButtonDeleteUser = (props: Props) => {
  const [userName, setUserName] = useState("");
  const { deleteUserAsync, success } = useDeleteUserAsync(userName);
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-light-emphasis fs-2  ms-auto" />
  );
  const { alert, handleAlert } = useAlertDelete(
    deleteUserAsync,
    `Usunąć użytkownika ?`
  );

  const getUserName = (name: string) => setUserName(name);

  const print = userName === props.user.userName;
  const icon = (
    <RiDeleteBin6Line className="text-light-emphasis fs-2 ms-auto" />
  );

  return (
    <>
      {alert}
      <Button
        onClick={() => {
          getUserName(props.user?.userName);
          handleAlert();
        }}
        disabled={success.isLoading}
        className="py-0 _d-center ms-auto bg-transparent border-0"
      >
        {print ? btnContent : icon}
      </Button>
    </>
  );
};

export default ButtonDeleteUser;
