import { useUsersQuery } from "../../../services/apiSliceUsers";
import useHTTPIndexSettings from "./useHTTPIndexSettings";

const IndexSettings = () => {
  const { settingsContent } = useHTTPIndexSettings();
  const { data, error, isLoading } = useUsersQuery();

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
