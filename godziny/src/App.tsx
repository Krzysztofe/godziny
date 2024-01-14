import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { auth } from "./data/firebaseConfig";
import LoadingPage from "./pages/loadingPage/LoadingPage";
import "./scss/App.scss";
import Header from "./components/header/Header";
import IndexSidebar from "./components/sidebar/indexSidebar/IndexSidebar";

const IndexLogin = lazy(() => import("./pages/login/IndexLogin"));
const PrivateRoutes = lazy(() => import("./components/PrivateRoutes"));

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
      {/* {true && <IndexSidebar />} */}
      <Header />
      {/* { isLoged && <IndexX /> }   */}
      <IndexSidebar />
      <Routes>
        {/* <Route path="/" element={<IndexLogin />} /> */}
        {/* <Route element={<PrivateRoutes />}> */}
        <Route path="/:month" element={<IndexMonthPanel />} />
        <Route path="/ustawienia" element={<IndexSettings />} />
        <Route path="/*" element={<IndexLogin />} />
        {/* </Route> */}
      </Routes>
    </Suspense>
  );
}

export default App;
