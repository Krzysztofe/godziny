import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SettingsUsersList from "../settingsUsersList/SettingsUsersList";
import SettingsUsersForm from "../settingsUserForm/SettingsUserForm";
import SettingsMonthsList from "../settingsMonthsList/SettingsMonthsList";
import { useUsersQuery } from "../../../services/apiSliceUsers";
import { Spinner } from "react-bootstrap";
import useHTTPIndexSettings from "./useHTTPIndexSettings";

const IndexSettings = () => {
  const { settingsContent } = useHTTPIndexSettings();

  const { error, isLoading } = useUsersQuery();

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
