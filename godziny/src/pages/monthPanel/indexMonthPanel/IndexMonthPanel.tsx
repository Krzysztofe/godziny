import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import useHTTPIndexMonthPanel from "./useHTTPIndexMonthPanel";

const IndexMonthPanel = () => {
  const { infoMonths } = useSelector((state: RootState) => state.infoMonths);

  const { month, error, isLoading } = useSelector(
    (state: RootState) => state.monthsPanel
  );

  const { panelContent } = useHTTPIndexMonthPanel();

  let mainStyles = "d-flex flex-column bg-primary-subtle";

  if (isLoading && !month) {
    mainStyles = "d-flex align-items-center justify-content-center";
  }

  else if (error || !month || !infoMonths || infoMonths?.length === 0) {
    mainStyles =
      "d-flex justify-content-end align-items-center p-1 pe-sm-5 col-sm-7 col-md-8 ms-auto mx-xxl-auto";
  }

  return (
    <main className={mainStyles} style={{ height: "100vh" }}>
      {panelContent}
    </main>
  );
};

export default IndexMonthPanel;
