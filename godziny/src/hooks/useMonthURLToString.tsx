import { useLocation } from "react-router-dom";

const useMonthURLToString = () => {
  const { pathname } = useLocation();
  const monthURL = pathname.slice(1);

  const isMonthInURL = monthURL && /^\d{4}-\d{2}$/.test(monthURL);

  if (isMonthInURL) {
    const monthURLToDateFormat = monthURL && new Date(monthURL);
    const monthURLStringFormat =
      monthURLToDateFormat &&
      new Intl.DateTimeFormat("pl-PL", {
        year: "numeric",
        month: "long",
        timeZone: "UTC",
      })?.format(monthURLToDateFormat);
    return {monthURLStringFormat};
  } else {
    const monthURLStringFormat = "";
    return {monthURLStringFormat};
  }

};

export default useMonthURLToString;
