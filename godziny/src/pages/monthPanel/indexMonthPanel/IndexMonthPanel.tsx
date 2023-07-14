import useURLValues from "../../../hooks/useURLValues";
import {
  useMonthDataQuery,
  useMonthsDataQuery,
} from "../../../services/apiSliceMonths";
import useHTTPIndexMonthPanel from "./useHTTPIndexMonthPanel";

const IndexMonthPanel = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data, error, isLoading } = useMonthsDataQuery();
  const { data: dataMonth } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

const { panelContent } = useHTTPIndexMonthPanel();

  let mainStyles = "d-flex flex-column bg-primary-subtle";

  if (isLoading || error || !data || !dataMonth) {
    mainStyles = "d-flex justify-content-center align-items-center";
  }

  return (
    <main className={mainStyles} style={{ height: "100vh" }}>
      {panelContent}
    </main>
  );
};

export default IndexMonthPanel;
