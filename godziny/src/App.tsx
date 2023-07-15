import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import LoadingPage from "./pages/loadingPage/LoadingPage";
import { useUsersQuery } from "./services/apiSliceUsers";
import {
  getUsers,
  getUsersError,
  getUsersIsLoading,
} from "./redux/storeFeatures/usersSlice";

const Login = lazy(() => import("./pages/login/Login"));
const PrivateRoutes = lazy(() => import("./components/PrivateRoutes"));
const IndexSidebar = lazy(() => import("./components/sidebar/IndexSidebar"));
const IndexMonthPanel = lazy(
  () => import("./pages/monthPanel/indexMonthPanel/IndexMonthPanel")
);

const IndexSettings = lazy(
  () => import("./pages/settings/indexSettings/IndexSettings")
);

function App() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useUsersQuery();

  useEffect(() => {
    dispatch(getUsers(data));
    dispatch(getUsersError(error));
    dispatch(getUsersIsLoading(isLoading));
  }, [data, error, isLoading, dispatch]);

  return (
    <BrowserRouter basename="/godziny">
      <Suspense fallback={<LoadingPage />}>
        <IndexSidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/:monthURL" element={<IndexMonthPanel />} />
            <Route path="/ustawienia" element={<IndexSettings />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
