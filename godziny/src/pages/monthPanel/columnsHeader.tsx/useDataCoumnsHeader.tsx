import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const useDataCoumnsHeader = () => {
  const { month } = useSelector((state: RootState) => state.monthPanel);

  const dataColumnsHeader = [
    {
      headerText: "Złożone:",
      counter: month?.calcHours?.submittedHours,
    },
    {
      headerText: "Przyznane:",
      counter: month?.calcHours?.acceptedHours,
    },
    {
      headerText: "Odrzucone:",
      counter: month?.calcHours?.rejectedHours,
    },
  ];

  return { dataColumnsHeader };
};

export default useDataCoumnsHeader;
