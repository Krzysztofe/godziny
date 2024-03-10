import { Suspense, lazy } from "react";
import useFirebaseConfig from "../hooks/useFirebaseConfig";
import useIsPath from "../hooks/useIsPath";
import LoadingPage from "../pages/loadingPage/LoadingPage";
import "../scss/App.scss";
import AppRoutes from "./AppRoutes";

const Header = lazy(() => import("../components/header/header/Header"));
const IndexSidebar = lazy(
  () => import("../components/sidebar/indexSidebar/IndexSidebar")
);

function App() {
  const { user } = useFirebaseConfig();
  const { isPath } = useIsPath(["ustawienia", "202"]);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Header />
      {user && isPath && <IndexSidebar />}
      <AppRoutes />
    </Suspense>
  );
}

export default App;
