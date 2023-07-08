import { useLocation } from "react-router-dom";

const useURLValues = () => {
  const { pathname } = useLocation();
  const monthURL = pathname.split("/").slice(-1)[0];
  const yearFromURL = monthURL?.slice(0, 4);
  const monthFromURL = monthURL?.slice(-2);

  return { monthURL, yearFromURL, monthFromURL };
};

export default useURLValues;
