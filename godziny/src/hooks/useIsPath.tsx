import { useLocation } from "react-router-dom";

const useIsPath = (routes: string[]) => {
  const { pathname } = useLocation();

  const isPath = routes.some(route => {
    const path = pathname.slice(1, 4) === "" ? "+" : pathname.slice(1, 4);
    return route.includes(path);
  });

  return { isPath };
};

export default useIsPath;
