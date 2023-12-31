import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const useMonthDate = (idx: number) => {
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

  const monthDate = listMonths && listMonths[idx];

  return { monthDate };
};

export default useMonthDate;
