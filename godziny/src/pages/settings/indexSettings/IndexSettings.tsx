import IndexContainer from "../../../components/IndexContainer";
import useRequestSettings from "./useRequestSettings";

const IndexSettings = () => {
  const { requestState } = useRequestSettings();

  return <IndexContainer>{requestState}</IndexContainer>;
};

export default IndexSettings;
