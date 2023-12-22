import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import useHTTPState from "../../hooks/useHTTPState";
import { RootState } from "../../redux/store";
import {
  agreeAlert,
  closeAlert,
  printAlert,
} from "../../redux/storeFeatures/alertSlice";
import { useDeleteUserMutation } from "../../services/apiSliceUsers";
import { ModelUser } from "../../sharedModels/modelUser";
import {
  dataStylesButton,
  dataStylesListGroupItem,
} from "./dataStylesSettingsLists";

const ListUsers = () => {
  const dispatch = useDispatch();
  const [deleteUser, success] = useDeleteUserMutation();
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
  );
  const { listUsers } = useSelector((state: RootState) => state.listUsers);
  const { agree } = useSelector((state: RootState) => state.alert);
  const [userName, setUserName] = useState("");

  const handleAlert = (userName: string) => {
    dispatch(printAlert("Usunąć użytkownika?"));
    setUserName(userName);
  };

  const usersNames = listUsers?.map(user => {
    return user.userName;
  });

  const deleteUserAsync = async () => {
    if (agree && userName && usersNames?.includes(userName)) {
      const userBodyPUTRequest = listUsers?.filter(
        (user: ModelUser) => user?.userName !== userName
      );

      userBodyPUTRequest && (await deleteUser(userBodyPUTRequest));
    }
  };

  useEffect(() => {
    deleteUserAsync();
    dispatch(agreeAlert(false));
    success.isSuccess && dispatch(closeAlert());
  }, [agree]);

  return (
    <>
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
