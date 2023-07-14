import { useUsersQuery } from "../../../services/apiSliceUsers";
import useHTTPIndexSettings from "./useHTTPIndexSettings";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../../redux/storeFeatures/usersSlice";

const IndexSettings = () => {
  const dispatch = useDispatch();
  const { settingsContent } = useHTTPIndexSettings();
  const { data, error, isLoading } = useUsersQuery();



  useEffect(() => {
    dispatch(getUsers(data));
  }, [data, dispatch]);

  let mainStyles = "bg-primary-subtle";

  if (isLoading || error) {
    mainStyles = "d-flex justify-content-center align-items-center";
  }

  return (
    <main className={mainStyles} style={{ minHeight: "100vh" }}>
      {settingsContent}
    </main>
  );
};

export default IndexSettings;
