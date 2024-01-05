import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ModelUser } from "../../../sharedModels/modelUser";
import { useDeleteUserMutation } from "../../../services/apiSliceUsers";

const useDeleteUserAsync = (userName: string) => {
  const { listUsers } = useSelector((state: RootState) => state.listUsers);
  const [deleteUser, success] = useDeleteUserMutation();

  const deleteUserAsync = async () => {
    if (userName) {
      const userBodyPUTRequest = listUsers?.filter(
        (user: ModelUser) => user?.userName !== userName
      );
      userBodyPUTRequest && (await deleteUser(userBodyPUTRequest));
    }
  };

  return { deleteUserAsync, success };
};

export default useDeleteUserAsync;
