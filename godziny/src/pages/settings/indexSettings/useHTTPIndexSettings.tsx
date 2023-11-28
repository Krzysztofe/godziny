import { Spinner } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import SettingsMonthsList from "../settingsMonthsList/SettingsMonthsList";
import SettingsUserForm from "../settingsUserForm/SettingsUserForm";
import SettingsUsersList from "../settingsUsersList/SettingsUsersList";
import SettingsReturnButton from "../SettingsReturnButton";
import Col from "react-bootstrap/Col";
import { printPanelContent } from "../../../utils/printPanelContent";

const useHTTPIndexSettings = () => {
  const { usersError, usersIsLoading } = useSelector(
    (state: RootState) => state.users
  );
  const { infoMonthsError, infoMonthsIsLoading } = useSelector(
    (state: RootState) => state.infoMonths
  );

  let settingsContent;

  if (usersIsLoading || infoMonthsIsLoading) {
    settingsContent = printPanelContent(
      <Spinner animation="border" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (usersError) {
    if ("status" in usersError) {
      const errMsg = "status" in usersError && usersError.status;

      settingsContent = printPanelContent(
        <h3 className="text-danger mx-auto ">
          <> Błąd: {errMsg} </>
        </h3>
      );
    }
  } else if (infoMonthsError) {
    if ("status" in infoMonthsError) {
      const errMsg = "status" in infoMonthsError && infoMonthsError.status;

      settingsContent = printPanelContent(
        <h3 className="text-danger mx-auto ">
          <> Błąd: {errMsg} </>
        </h3>
      );
    }
  } else {
    settingsContent = (
      <div style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}>
        <SettingsReturnButton />
        <SettingsMonthsList />
        <SettingsUserForm />
        <SettingsUsersList />
      </div>
    );
  }

  return { settingsContent };
};
export default useHTTPIndexSettings;
