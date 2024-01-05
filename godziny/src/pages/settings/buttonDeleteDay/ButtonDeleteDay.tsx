import { useState } from "react";
import Button from "react-bootstrap/Button";
import useHTTPState from "../../../hooks/useHTTPState";
import useAlertDelete from "../../../hooks/useAlertDelete";
import { RiDeleteBin6Line } from "react-icons/ri";
import { dataStylesButton } from "../dataStylesSettingsLists";
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
    <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
  );
  const { alert, handleAlert } = useAlertDelete(deleteUserAsync); 
  
  const getUserName = (userName: string) => {
    setUserName(userName);
  };

  return (
    <>
      {alert}
      <Button
        onClick={() => {
          getUserName(props.user?.userName);
          handleAlert();
        }}
        disabled={success.isLoading}
        className={dataStylesButton}
        style={{ color: props.user.userColor }}
      >
        {props.user.userName}

        {userName === props.user.userName ? (
          btnContent
        ) : (
          <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
        )}
      </Button>
    </>
  );
};

export default ButtonDeleteUser;
