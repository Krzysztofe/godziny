import { useSelector } from "react-redux";
import IndexContainer from "../../../components/indexContainer/IndexContainer";
import RequestError from "../../../components/requestStates/RequestError";
import RequestLoading from "../../../components/requestStates/RequestLoading";
import { requestContainer } from "../../../utils/utilsRequestContainer";
import { RootState } from "../../../redux/store";
import SettingsContent from "../settingsContent/SettingsContent";

const IndexSettings = () => {
  const { listUsersError, listUsersIsLoading } = useSelector(
    (state: RootState) => state.listUsers
  );
  const { listMonthsError } = useSelector(
    (state: RootState) => state.listMonths
  );
  const { updateMonthError } = useSelector(
    (state: RootState) => state.monthPanel
  );

  let content;

  if (listUsersIsLoading) {
    content = <RequestLoading styles={requestContainer} />;
  } else if (updateMonthError || listMonthsError || listUsersError) {
    content = <RequestError styles={requestContainer} />;
  } else {
    content = <SettingsContent />;
  }

  return <IndexContainer>{content}</IndexContainer>;
};

export default IndexSettings;
