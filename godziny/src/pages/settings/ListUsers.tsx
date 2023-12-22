import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Alert from "../../components/alert/Alert";
import useHTTPState from "../../hooks/useHTTPState";
import { RootState } from "../../redux/store";
import { useDeleteUserMutation } from "../../services/apiSliceUsers";
import { ModelUser } from "../../sharedModels/modelUser";
import {
  dataStylesButton,
  dataStylesListGroupItem,
} from "./dataStylesSettingsLists";

const ListUsers = () => {
  const [deleteUser, success] = useDeleteUserMutation();
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
  );
  const { listUsers } = useSelector((state: RootState) => state.listUsers);

  const [userName, setUserName] = useState("");
  const [isAlertPrinted, setIsAlertPrinted] = useState(false);

  const handleAlert = (userName: string) => {
    setUserName(userName);
    setIsAlertPrinted(true);
  };

  const deleteUserAsync = async () => {
    if (userName) {
      const userBodyPUTRequest = listUsers?.filter(
        (user: ModelUser) => user?.userName !== userName
      );
      userBodyPUTRequest && (await deleteUser(userBodyPUTRequest));
      setIsAlertPrinted(false);
    }
  };
  
  return (
    <>
      <Alert
        action={deleteUserAsync}
        isPrinted={isAlertPrinted}
        setIsPrinted={setIsAlertPrinted}
        header={"Usunąć użytkownika"}
      />
      {listUsers?.map(user => {
        return (
          <ListGroup.Item
            key={user.userName}
            className={dataStylesListGroupItem}
            style={{
              backgroundColor: user.userColor,
              overflow: "hidden",
            }}
          >
            <Button
              onClick={() => handleAlert(user.userName)}
              disabled={success.isLoading}
              className={dataStylesButton}
              style={{ color: user.userColor }}
            >
              {user.userName}

              {userName === user.userName ? (
                btnContent
              ) : (
                <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
              )}
            </Button>
          </ListGroup.Item>
        );
      })}
    </>
  );
};

export default ListUsers;
