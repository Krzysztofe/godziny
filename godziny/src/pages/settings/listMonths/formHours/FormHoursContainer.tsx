import { useSelector } from "react-redux";
import useReduxCalcHours from "../../../../hooks/updateReduxDatabase/useReduxCalcHours";
import useMonthDate from "../useMonthDate";
import { RootState } from "../../../../redux/store";
import RequestError from "../../../../components/requestStates/RequestError";
import RequestLoading from "../../../../components/requestStates/RequestLoading";
import FormHoursContext from "./FormHoursContext";
import RequestLoadingFormHours from "./requestsStates/RequestLoadingFormHours";

type Props = {
  idx: number;
};

const FormHoursContainer = (props: Props) => {
  const { monthDate } = useMonthDate(props.idx);
  const yearValue = monthDate?.slice(0, 4) ?? "";
  const monthValue = monthDate?.slice(5) ?? "";
  useReduxCalcHours(yearValue, monthValue);
  const { calcHoursIsLoading, calcHoursError } = useSelector(
    (state: RootState) => state.calcHours
  );

  let content;

  if (calcHoursIsLoading) {
    content = <RequestLoadingFormHours />;
  } else if (calcHoursError) {
    content = <RequestError />;
  } else {
    content = <FormHoursContext idx={props.idx} />;
  }

  return <> {content} </>;
};

export default FormHoursContainer;
