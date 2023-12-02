import useRequestMonthPanel from "./useRequestMonthPanel";
import IndexContainer from "../../../components/IndexContainer";
import useReduxMonthBody from "../../../hooks/updateReduxDatabase/useReduxMonthBody";
import useReduxListMonths from "../../../hooks/updateReduxDatabase/useReduxListMonths";

const IndexMonthPanel = () => {
  useReduxMonthBody();
  useReduxListMonths();

  const { requestState } = useRequestMonthPanel();

  return <IndexContainer>{requestState}</IndexContainer>;
};

export default IndexMonthPanel;
