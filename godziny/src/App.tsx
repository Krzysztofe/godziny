import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingPage from "./pages/loadingPage/LoadingPage";
import "./scss/App.scss";
import { auth } from "./data/firebaseConfig";
import { useUsersQuery } from "./services/apiSliceUsers";

const IndexLogin = lazy(() => import("./pages/login/IndexLogin"));
const PrivateRoutes = lazy(() => import("./components/PrivateRoutes"));
const IndexSidebar = lazy(
  () => import("./components/sidebar/indexSidebar/IndexSidebar")
);
const IndexMonthPanel = lazy(
  () => import("./pages/monthPanel/indexMonthPanel/IndexMonthPanel")
);
const IndexSettings = lazy(
  () => import("./pages/settings/indexSettings/IndexSettings")
);

function App() {
  const [isLoged, setLoged] = useState<string | undefined>("");
  const { pathname } = useLocation();

  useEffect(() => {
    setLoged(auth.currentUser?.providerId);
  }, [pathname]);

  return (
    <Suspense fallback={<LoadingPage />}>
      {isLoged && <IndexSidebar />}
      <Routes>
        <Route path="/godziny" element={<IndexLogin />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/godziny/:month" element={<IndexMonthPanel />}
          //  loader={useUsersQuery}
           />
          <Route path="/godziny/ustawienia" element={<IndexSettings />} />
          <Route path="/*" element={<IndexLogin />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
