import useRequestMonthPanel from "./useRequestMonthPanel";
import IndexContainer from "../../../components/IndexContainer";
import useReduxMonthData from "../../../components/sidebar/useReduxMonthData";

const IndexMonthPanel = () => {
   useReduxMonthData();
   
  const { requestState } = useRequestMonthPanel();
  
  return <IndexContainer>{requestState}</IndexContainer>;
};

export default IndexMonthPanel;
