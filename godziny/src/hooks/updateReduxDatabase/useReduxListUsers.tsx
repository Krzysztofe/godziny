import { useEffect } from "react";
import { useUsersQuery } from "../../services/apiSliceUsers";

import {
  getUsers,
  getUsersIsLoading,
  getUsersError,
} from "../../redux/storeFeatures/usersSlice";
import { useDispatch } from "react-redux";

const useReduxListUsers = () => {
  const dispatch = useDispatch();

  const {
    data: dataUsers,
    error: errorUsers,
    isLoading: isLoadingUsers,
  } = useUsersQuery();

  useEffect(() => {
    dispatch(getUsers(dataUsers));
    dispatch(getUsersError(errorUsers));
    dispatch(getUsersIsLoading(isLoadingUsers));
  }, [dataUsers, errorUsers, isLoadingUsers, dispatch]);
};

export default useReduxListUsers;
