import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { auth } from "../data/firebaseConfig";
import LoadingPage from "../pages/loadingPage/LoadingPage";
import "../scss/App.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import useInPathname from "../hooks/useIsPathname";
import AppRoutes from "./AppRoutes";

const Header = lazy(() => import("../components/header/header/Header"));

const IndexSidebar = lazy(
  () => import("../components/sidebar/indexSidebar/IndexSidebar")
);

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

function App() {
  const [user] = useAuthState(auth);
  const { inPathname: isMonthPanel } = useInPathname("202");
  const { inPathname: isSettings } = useInPathname("ustawienia");

  return (
    <Suspense fallback={<LoadingPage />}>
      <Header />
      {user && (isMonthPanel || isSettings) && <IndexSidebar />}
      <AppRoutes />
    </Suspense>
  );
}

export default App;
