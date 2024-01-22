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

const routes = [
  { path: "/", element: <IndexLogin />, privateRoute: false },
  { path: "/:month", element: <IndexMonthPanel />, privateRoute: true },
  { path: "/ustawienia", element: <IndexSettings />, privateRoute: true },
  { path: "/*", element: <IndexLogin />, privateRoute: false },
];

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element, privateRoute }) => {
        return (
          <>
            {privateRoute ? (
              <Route key={path} element={<PrivateRoutes />}>
                <Route path={path} element={element} />
              </Route>
            ) : (
              <Route key={path} path={path} element={element} />
            )}
            ;
          </>
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
