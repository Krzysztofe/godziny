import { useEffect } from "react";
import { useUsersQuery } from "../../services/apiSliceUsers";

import {
  geListtUsers,
  getListUsersError,
  getListUsersIsLoading,
} from "../../redux/storeFeatures/listUsersSlice";
import { useDispatch } from "react-redux";

const useReduxListUsers = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useUsersQuery();

  useEffect(() => {
    dispatch(geListtUsers(data));

    dispatch(getListUsersError(error));

    dispatch(getListUsersIsLoading(isLoading));
  }, [data, error, isLoading, dispatch]);
};

export default useReduxListUsers;
