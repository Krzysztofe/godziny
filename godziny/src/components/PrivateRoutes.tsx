import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../data/firebaseConfig";

const PrivateRoutes = () => {
  const [user] = useAuthState(auth);
 
  return user ? <Outlet /> : <Navigate to="/godziny" />;
};

export default PrivateRoutes;
