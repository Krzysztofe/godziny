import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import useHTTPState from "../../../hooks/useHTTPState";
import { RootState } from "../../../redux/store";
import { useDeleteUserMutation } from "../../../services/apiSliceUsers";
import { ModelUser } from "../../../sharedModels/modelUser";
import { alertHelper } from "../../../utils/alertHelpers";
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
  const { users } = useSelector((state: RootState) => state.users);
  const [userName, setUserName] = useState("");

  const handleDelete = async (userName: string) => {
    Swal.fire(alertHelper("Usunąć użytkownika?")).then(async result => {
      if (result.isConfirmed) {
        setUserName(userName);
        const userBodyPUTRequest = users?.filter(
          (user: ModelUser) => user?.userName !== userName
        );

        await deleteUser(userBodyPUTRequest);
      }
    });
  };

  return (
    <>
      {users?.map(user => {
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
              onClick={() => handleDelete(user.userName)}
              disabled={userName === user.userName ? success.isLoading : false}
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
