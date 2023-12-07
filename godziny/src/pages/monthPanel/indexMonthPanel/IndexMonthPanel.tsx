import useRequestMonthPanel from "./useRequestMonthPanel";
import IndexContainer from "../../../components/IndexContainer";
import useReduxMonthBody from "../../../hooks/updateReduxDatabase/useReduxMonthData";
import useReduxListMonths from "../../../hooks/updateReduxDatabase/useReduxListMonths";
import useReduxListUsers from "../../../hooks/updateReduxDatabase/useReduxListUsers";

const IndexMonthPanel = () => {
  // useReduxMonthBody();
  // useReduxListMonths();

  const { requestState } = useRequestMonthPanel();

  return <IndexContainer>{requestState}</IndexContainer>;
};

export default IndexMonthPanel;
