import { useParams } from "react-router-dom";

const useMonthURLToString = () => {
  const { monthURL } = useParams();
  const monthURLToDateFormat = monthURL && new Date(monthURL);

  const monthURLStringFormat =
    monthURLToDateFormat &&
    new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthURLToDateFormat);

  return { monthURLStringFormat };
};

export default useMonthURLToString;
