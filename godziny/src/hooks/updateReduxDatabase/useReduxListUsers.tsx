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

  const { data, error, isLoading } = useUsersQuery();

  useEffect(() => {
    dispatch(getUsers(data));

    dispatch(getUsersError(error));

    dispatch(getUsersIsLoading(isLoading));
  }, [data, error, isLoading, dispatch]);
};

export default useReduxListUsers;
