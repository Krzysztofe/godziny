import {
  useDeleteUserMutation,
  useUsersQuery,
} from "../../../../services/apiSliceUsers";
import { ModelUser } from "../../../../sharedModels/modelUser";

const useDeleteUserAsync = (userName: string) => {
  const { data: listUsers } = useUsersQuery();

  const [deleteUser, success] = useDeleteUserMutation();

  const deleteUserAsync = async () => {
    if (!userName || !listUsers) return;

    const userToDelete = listUsers.find(
      (user: ModelUser) => user.userName === userName
    );

    if (userToDelete) await deleteUser(userToDelete.id);
  };

  return { deleteUserAsync, success };
};

export default useDeleteUserAsync;
