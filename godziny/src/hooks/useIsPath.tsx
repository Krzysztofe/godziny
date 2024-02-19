import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const useIsPath = (routes: string[]) => {
  const { pathname } = useLocation();

  const isPath = useMemo(() => {
    return routes.some(route => {
      const path = pathname.slice(1, 4) === "" ? "+" : pathname.slice(1, 4);
      return route.includes(path);
    });
  }, [routes, pathname]);
  return { isPath };
};

export default useIsPath;
