import {
  useDeleteUserMutation,
  useUsersQuery,
} from "../../../../services/apiSliceUsers";
import { ModelUser } from "../../../../sharedModels/modelUser";

const useDeleteUserAsync = (userName: string) => {
  const { data: listUsers } = useUsersQuery();

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
