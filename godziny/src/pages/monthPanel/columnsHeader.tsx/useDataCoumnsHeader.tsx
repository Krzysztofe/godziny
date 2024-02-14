import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import useMonthQuery from "../../../hooks/useMonthQuery";

const useDataCoumnsHeader = () => {
  // const { month } = useSelector((state: RootState) => state.monthPanel);
   const { data: month } = useMonthQuery();


  const { calcHours } = month || {};

  const dataColumnsHeader = [
    {
      headerText: "Złożone:",
      counter: calcHours?.submittedHours,
    },
    {
      headerText: "Przyznane:",
      counter: calcHours?.acceptedHours,
    },
    {
      headerText: "Odrzucone:",
      counter: calcHours?.rejectedHours,
    },
  ];

  return { dataColumnsHeader };
};

export default useDataCoumnsHeader;
