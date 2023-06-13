import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/loadingPage/LoadingPage";
const Login = lazy(() => import("./pages/login/Login"));
const IndexHoursPanel = lazy(
  () => import("./pages/hoursPanel/IndexHoursPanel")
);

function App() {
  return (
    <BrowserRouter basename="/godziny">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/miesiac" element={<IndexHoursPanel />} />
          <Route path="/miesiac/:monthValue" element={<IndexHoursPanel />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
