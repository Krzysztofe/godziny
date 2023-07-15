import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useURLValues from "../../../hooks/useURLValues";
import { RootState } from "../../../redux/store";
import {
  getMonth,
  getMonthError,
  getMonthIsLoading,
} from "../../../redux/storeFeatures/hoursPanelSlice";
import { useMonthDataQuery } from "../../../services/apiSliceMonths";
import useHTTPIndexMonthPanel from "./useHTTPIndexMonthPanel";

const IndexMonthPanel = () => {
  const dispatch = useDispatch();
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  const { month, error, isLoading } = useSelector(
    (state: RootState) => state.hoursPanel
  );

  useEffect(() => {
    dispatch(getMonth(data));
    dispatch(getMonthError(error));
    dispatch(getMonthIsLoading(isLoading));
  }, [data, dispatch]);

  const { infoMonths } = useSelector((state: RootState) => state.infoMonths);
  const { panelContent } = useHTTPIndexMonthPanel();

  let mainStyles = "d-flex flex-column bg-primary-subtle";


  if (isLoading || error || !data) {
    let mainStyles = "d-flex justify-content-center align-items-center";
  }



  return (
    <main className={mainStyles} style={{ height: "100vh" }}>
      {panelContent}
    </main>
  );
};

export default IndexMonthPanel;
