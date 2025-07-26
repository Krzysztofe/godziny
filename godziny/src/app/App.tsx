import { Suspense, lazy } from "react";
import useIsPath from "../hooks/useIsPath";
import LoadingPage from "../pages/loadingPage/LoadingPage";
import "../scss/App.scss";
import AppRoutes from "./AppRoutes";


const Header = lazy(() => import("../components/header/header/Header"));
const IndexSidebar = lazy(
  () => import("../components/sidebar/indexSidebar/IndexSidebar")
);

function App() {


  const jwt = localStorage.getItem("token");
  return (
    <Suspense fallback={<LoadingPage />}>
      <Header />
      {jwt && <IndexSidebar />}
      <AppRoutes />
    </Suspense>
  );
}

export default App;
