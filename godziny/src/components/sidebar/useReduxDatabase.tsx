import { useDispatch } from "react-redux";
import useURLValues from "../../hooks/useURLValues";
import {
  useMonthDataQuery,
  useMonthsInfoQuery,
} from "../../services/apiSliceMonths";
import { useEffect } from "react";
import {
  getMonth,
  getMonthError,
  getMonthIsLoading,
} from "../../redux/storeFeatures/monthsPanelSlice";
import { useUsersQuery } from "../../services/apiSliceUsers";
import {
  getUsers,
  getUsersError,
  getUsersIsLoading,
} from "../../redux/storeFeatures/usersSlice";
import {
  getInfoMonths,
  getInfoMonthError,
  getInfoMonthIsLoading,
} from "../../redux/storeFeatures/infoMonthsSlice";

const useReduxDatabase = () => {
  const dispatch = useDispatch();
  const { yearFromURL, monthFromURL } = useURLValues();

  // const {
  //   data: dataMonth,
  //   error: errorMonth,
  //   isLoading: isLoadingMonth,
  // } = useMonthDataQuery({
  //   year: yearFromURL,
  //   month: monthFromURL,
  // });

  // const {
  //   data: dataUsers,
  //   error: errorUsers,
  //   isLoading: isLoadingUsers,
  // } = useUsersQuery();

  const {
    data: dataInfoMonths,
    error: errorInfoMonths,
    isLoading: isLoadingInfoMonths,
  } = useMonthsInfoQuery();

  // useEffect(() => {
  //   dispatch(getMonth(dataMonth));
  //   dispatch(getMonthError(errorMonth));
  //   dispatch(getMonthIsLoading(isLoadingMonth));
  // }, [dataMonth, errorMonth, isLoadingMonth, dispatch]);

  // useEffect(() => {

    
  //   dispatch(getUsers(dataUsers));
  //   dispatch(getUsersError(errorUsers));
  //   dispatch(getUsersIsLoading(isLoadingUsers));
  // }, [dataUsers, errorUsers, isLoadingUsers, dispatch]);

  useEffect(() => {
    dispatch(getInfoMonths(dataInfoMonths));
    dispatch(getInfoMonthError(errorInfoMonths));
    dispatch(getInfoMonthIsLoading(isLoadingInfoMonths));
  }, [dataInfoMonths, errorInfoMonths, isLoadingInfoMonths, dispatch]);

  return {};
};

export default useReduxDatabase;
