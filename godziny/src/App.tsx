import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/loadingPage/LoadingPage";
const Login = lazy(() => import("./pages/login/Login"));
const IndexMonthPanel = lazy(
  () => import("./pages/monthPanel/IndexMonthPanel")
);

function App() {
  return (
    <BrowserRouter basename="/godziny">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/miesiac" element={<IndexMonthPanel />} />
          <Route path="/miesiac/:monthValue" element={<IndexMonthPanel />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
