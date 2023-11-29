import useFetchMonthPanel from "./useFetchMonthPanel";
import IndexContainer from "../../../components/IndexContainer";

const IndexMonthPanel = () => {
  const { monthContent } = useFetchMonthPanel();
  
  return (
    <IndexContainer>{monthContent}</IndexContainer>
  );
};

export default IndexMonthPanel;
