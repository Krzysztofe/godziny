import IndexContainer from "../../../components/IndexContainer";
import useHTTPIndexSettings from "./useHTTPIndexSettings";

const IndexSettings = () => {
  const { settingsContent } = useHTTPIndexSettings();

  return <IndexContainer>{settingsContent}</IndexContainer>;
};

export default IndexSettings;
