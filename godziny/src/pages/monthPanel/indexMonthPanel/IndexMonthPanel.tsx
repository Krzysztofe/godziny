import IndexContainer from "../../../components/IndexContainer";
import useReduxMonthData from "../../../hooks/updateReduxDatabase/useReduxMonthData";
import useRequestMonthPanel from "./useRequestMonthPanel";

const IndexMonthPanel = () => {
  useReduxMonthData();

  const { requestState } = useRequestMonthPanel();

  return <IndexContainer>{requestState} </IndexContainer>;
};

export default IndexMonthPanel;
