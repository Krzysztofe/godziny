import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/loadingPage/LoadingPage";
const Login = lazy(() => import("./pages/login/Login"));
const IndexHours = lazy(() => import("./pages/hours/Hours"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/godziny" element={<IndexHours />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
