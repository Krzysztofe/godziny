import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const IndexLogin = lazy(() => import("../pages/login/indexLogin/IndexLogin"));
const PrivateRoutes = lazy(() => import("../components/PrivateRoutes"));
const IndexMonthPanel = lazy(
  () => import("../pages/monthPanel/indexMonthPanel/IndexMonthPanel")
);
const IndexSettings = lazy(
  () => import("../pages/settings/indexSettings/IndexSettings")
);
const publicRoutes = [
  { path: "/", element: <IndexLogin /> },
  { path: "/*", element: <IndexLogin /> },
];

const privateRoutes = [
  { path: "/:month", element: <IndexMonthPanel /> },
  { path: "/ustawienia", element: <IndexSettings /> },
];

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
      <Route element={<PrivateRoutes />}>
        {privateRoutes.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
