import { useSelector } from "react-redux";
import IndexContainer from "../../../components/indexContainer/IndexContainer";
import RequestError from "../../../components/requestStates/RequestError";
import RequestLoading from "../../../components/requestStates/RequestLoading";
import { RootState } from "../../../redux/store";
import { useUsersQuery } from "../../../services/apiSliceUsers";
import { requestContainer } from "../../../utils/utilsRequestContainer";
import SettingsContent from "../settingsContent/SettingsContent";

const IndexSettings = () => {
  const { error: listUsersError, isLoading: listUsersIsLoading } =
    useUsersQuery();

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
