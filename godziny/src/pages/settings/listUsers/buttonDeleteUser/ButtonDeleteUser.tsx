import { useState } from "react";
import Button from "react-bootstrap/Button";
import IconTrash from "../../../../components/icons/IconTrash";
import useAlertDelete from "../../../../hooks/useAlertDelete";
import useBtnContent from "../../../../hooks/useBtnContent";
import { ModelUser } from "../../../../sharedModels/modelUser";
import useDeleteUserAsync from "./useDeleteUserAsync";

type Props = {
  user: ModelUser;
};

const ButtonDeleteUser = (props: Props) => {
  const [userName, setUserName] = useState("");
  const { deleteUserAsync, success } = useDeleteUserAsync(userName);
  const { alert, handleAlert } = useAlertDelete(
    deleteUserAsync,
    `Usunąć użytkownika ?`
  );
  
  const { btnContent } = useBtnContent(success.isLoading, <IconTrash />);

  const getUserName = (name: string) => setUserName(name);

  const print = userName === props.user.userName;

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
        {print ? btnContent : <IconTrash />}
      </Button>
    </>
  );
};

export default ButtonDeleteUser;
