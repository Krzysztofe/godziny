import { Suspense, lazy } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import FirebaseSingleton from "../data/firebaseConfig";
import LoadingPage from "../pages/loadingPage/LoadingPage";
import "../scss/App.scss";
import AppRoutes from "./AppRoutes";
import useIsPath from "../hooks/useIsPath";

const Header = lazy(() => import("../components/header/header/Header"));
const IndexSidebar = lazy(
  () => import("../components/sidebar/indexSidebar/IndexSidebar")
);

function App() {
  const firebaseInstance = FirebaseSingleton.getInstance();
  const auth = firebaseInstance.auth;
  
  const [user] = useAuthState(auth!);
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
