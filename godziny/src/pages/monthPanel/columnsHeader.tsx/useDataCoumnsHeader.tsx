import useMonthQuery from "../../../hooks/useMonthQuery";

const useDataCoumnsHeader = () => {
  const { data: month } = useMonthQuery();

  const { hours } = month || {};

  const dataColumnsHeader = [
    {
      headerText: "Złożone:",
      counter: hours?.submittedHours,
    },
    {
      headerText: "Przyznane:",
      counter: hours?.acceptedHours,
    },
    {
      headerText: "Odrzucone:",
      counter: hours?.rejectedHours,
    },
  ];

  return { dataColumnsHeader };
};

export default useDataCoumnsHeader;
