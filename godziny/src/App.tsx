import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LoadingPage from "./pages/loadingPage/LoadingPage";
import "./scss/App.scss";

const IndexLogin = lazy(() => import("./pages/login/IndexLogin"));
const PrivateRoutes = lazy(() => import("./components/PrivateRoutes"));
const IndexSidebar = lazy(() => import("./components/sidebar/IndexSidebar"));
const IndexMonthPanel = lazy(
  () => import("./pages/monthPanel/indexMonthPanel/IndexMonthPanel")
);
const IndexSettings = lazy(
  () => import("./pages/settings/indexSettings/IndexSettings")
);
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingPage />}>
      <IndexSidebar />
      {/* <Routes> */}
      <Routes>
        <Route path="/godziny" element={<IndexLogin />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/godziny/:monthURL" element={<IndexMonthPanel />} />
          <Route path="/godziny/ustawienia" element={<IndexSettings />} />
          {/* <Route path="/godziny/*" element={<NotFound />} /> */}
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
