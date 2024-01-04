import { useSelector } from "react-redux";
import RequestError from "../../../../components/requestStates/RequestError";
import RequestLoading from "../../../../components/requestStates/RequestLoading";
import useReduxCalcHours from "../../../../hooks/updateReduxDatabase/useReduxCalcHours";
import { RootState } from "../../../../redux/store";
import useMonthDate from "../useMonthDate";
import FormHoursContext from "./FormHoursContext";
import { requestContainer } from "./utilsRequestContainer";

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
    content = <RequestLoading styles={requestContainer} />;
  } else if (calcHoursError) {
    content = <RequestError styles={requestContainer} />;
  } else {
    content = <FormHoursContext idx={props.idx} />;
  }

  return <> {content} </>;
};

export default FormHoursContainer;
