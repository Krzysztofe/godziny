import useRequestMonthPanel from "./useRequestMonthPanel";
import IndexContainer from "../../../components/IndexContainer";

const IndexMonthPanel = () => {
  const { requestState } = useRequestMonthPanel();
  
  return <IndexContainer>{requestState}</IndexContainer>;
};

export default IndexMonthPanel;
