import { useSelector } from "react-redux";
import RequestError from "../../../../components/requestStates/RequestError";
import RequestLoading from "../../../../components/requestStates/RequestLoading";
import useReduxCalcHours from "../../../../hooks/updateReduxDatabase/useReduxCalcHours";
import { RootState } from "../../../../redux/store";
import useMonthDate from "../useMonthDate";
import FormHoursContext from "./FormHoursContext";
import { requestContainer } from "./utilsRequestContainer.scss/utilsRequestContainer";
import { useContext } from "react";
import { MonthItemContext } from "../ListMonths";

const FormHoursContainer = () => {
  const {monthIdx, year, month} = useContext(MonthItemContext);
  const { monthDate } = useMonthDate(monthIdx);



  useReduxCalcHours(year.toString(), month.toString());

  const { calcHoursIsLoading, calcHoursError } = useSelector(
    (state: RootState) => state.calcHours
  );



  let content;

  if (calcHoursIsLoading) {
    content = <RequestLoading styles={requestContainer} />;
  } else if (calcHoursError) {
    content = <RequestError styles={requestContainer} />;
  } else {
    content = <FormHoursContext />;
  }

  return <> {content} </>;

};

export default FormHoursContainer;
