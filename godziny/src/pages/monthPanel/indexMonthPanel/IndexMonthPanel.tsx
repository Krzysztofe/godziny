import useURLValues from "../../../hooks/useURLValues";
import { getMonth } from "../../../redux/storeFeatures/hoursPanelSlice";
import {
  useMonthDataQuery,
  useMonthsDataQuery,
} from "../../../services/apiSliceMonths";
import useHTTPIndexMonthPanel from "./useHTTPIndexMonthPanel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



const IndexMonthPanel = () => {
   const dispatch = useDispatch();
  const { yearFromURL, monthFromURL } = useURLValues();
  // const { data, error, isLoading } = useMonthsDataQuery();

  const {
    data: dataMonth,
    error,
    isLoading,
  } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

 


const { panelContent } = useHTTPIndexMonthPanel();

  useEffect(() => {
    dispatch(getMonth(dataMonth));
  }, [dataMonth, dispatch]);


  let mainStyles = "d-flex flex-column bg-primary-subtle";

  if (isLoading || error || !dataMonth) {
    mainStyles = "d-flex justify-content-center align-items-center";
  }

  return (
    <main className={mainStyles} style={{ height: "100vh" }}>
      {panelContent}
    </main>
  );
};

export default IndexMonthPanel;
