import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { auth } from "./data/firebaseConfig";
import LoadingPage from "./pages/loadingPage/LoadingPage";
import "./scss/App.scss";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = lazy(() => import("./components/header/Header"));

const IndexSidebar = lazy(
  () => import("./components/sidebar/indexSidebar/IndexSidebar")
);

const IndexLogin = lazy(() => import("./pages/login/indexLogin/IndexLogin"));
const PrivateRoutes = lazy(() => import("./components/PrivateRoutes"));

const IndexMonthPanel = lazy(
  () => import("./pages/monthPanel/indexMonthPanel/IndexMonthPanel")
);
const IndexSettings = lazy(
  () => import("./pages/settings/indexSettings/IndexSettings")
);

function App() {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();

  const notLogin = pathname !== "/";

  return (
    <Suspense fallback={<LoadingPage />}>
      <Header />
      {user && notLogin && <IndexSidebar />}
      <Routes>
        <Route path="/" element={<IndexLogin />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/:month" element={<IndexMonthPanel />} />
          <Route path="/ustawienia" element={<IndexSettings />} />
        </Route>
        <Route path="/*" element={<IndexLogin />} />
      </Routes>
    </Suspense>
  );
}

export default App;
