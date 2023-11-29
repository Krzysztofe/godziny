import IndexContainer from "../../../components/IndexContainer";
import useFetchSettings from "./useFetchSettings";

const IndexSettings = () => {
  const { settingsContent } = useFetchSettings();

  return <IndexContainer>{settingsContent}</IndexContainer>;
};

export default IndexSettings;
