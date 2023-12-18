import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <IndexSidebar />
        <Routes>
          <Route path="/godziny" element={<IndexLogin />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/godziny/:monthURL" element={<IndexMonthPanel />} />
            <Route path="/godziny/ustawienia" element={<IndexSettings />} />
            <Route path="/*" element={<IndexLogin />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
