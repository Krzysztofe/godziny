import { useLocation } from "react-router-dom";

const useURLValues = () => {
  const { pathname } = useLocation();
  const monthURL = pathname.split("/").slice(-1)[0];
  const yearFromURL = monthURL?.slice(0, 4);
  const monthFromURL = monthURL?.slice(-2);

  const isMonthInURL = /^\d{4}-\d{2}$/.test(monthURL);

  return { monthURL, yearFromURL, monthFromURL, isMonthInURL };
};

export default useURLValues;
