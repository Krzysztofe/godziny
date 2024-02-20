import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import FirebaseSingleton from "../data/firebaseConfig";

const PrivateRoutes = () => {
  const firebaseInstance = FirebaseSingleton.getInstance();
  const auth = firebaseInstance.auth;
  
  const [user] = useAuthState(auth!);

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
