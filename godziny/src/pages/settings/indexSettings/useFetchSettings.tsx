import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import SettingsMonthsList from "../settingsMonthsList/SettingsMonthsList";
import { printPanelContent } from "../../../utils/printPanelContent";
import SettingsReturnButton from "../SettingsReturnButton";
import FormUserContext from "../../../components/formUser/FormUserContext";
import SettingsUsersList from "../settingsUsersList/SettingsUsersList";

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
      <div
        className="bg-white p-2 p-sm-4 w-100"
        style={{
          height: "100%",
          overflow: "hidden auto",
          outline: "4px solid white",
        }}
      >
        <SettingsMonthsList />
        <SettingsUsersList />
      </div>
    );
  }

  return { settingsContent };
};
export default useHTTPIndexSettings;
