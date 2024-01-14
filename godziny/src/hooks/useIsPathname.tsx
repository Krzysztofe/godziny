import { useLocation } from "react-router-dom";

const useInPathname = (pathnamePart: string) => {
  const { pathname } = useLocation();
  const inPathname = pathname.includes(pathnamePart);

  return { inPathname };
};

export default useInPathname;
