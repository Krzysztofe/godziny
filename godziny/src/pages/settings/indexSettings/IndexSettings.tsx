import IndexContainer from "../../../components/IndexContainer";
import useReduxListMonths from "../../../hooks/updateReduxDatabase/useReduxListMonths";
import useRequestSettings from "./useRequestSettings";

const IndexSettings = () => {
  const { requestState } = useRequestSettings();
  useReduxListMonths();

  return <IndexContainer>{requestState}</IndexContainer>;
};

export default IndexSettings;
