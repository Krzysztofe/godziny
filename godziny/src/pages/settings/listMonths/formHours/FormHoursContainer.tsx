import useReduxCalcHours from "../../../../hooks/updateReduxDatabase/useReduxCalcHours";
import useMonthDate from "../useMonthDate";
import useRequestFormHours from "./useRequestFormHours";

type Props = {
  idx: number;
};

const FormHoursContainer = (props: Props) => {
  const { monthDate } = useMonthDate(props.idx);

  const yearValue = monthDate?.slice(0, 4) ?? "";
  const monthValue = monthDate?.slice(5) ?? "";
  useReduxCalcHours(yearValue, monthValue);
  const { requestState } = useRequestFormHours(props.idx);

  return <> {requestState} </>;
};

export default FormHoursContainer;
