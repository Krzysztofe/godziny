import useHTTPIndexMonthPanel from "./useHTTPIndexMonthPanel";
import IndexContainer from "../../../components/IndexContainer";

const IndexMonthPanel = () => {
  const { monthContent } = useHTTPIndexMonthPanel();
  
  return (
    <IndexContainer>{monthContent}</IndexContainer>
  );
};

export default IndexMonthPanel;
