import { Navigate, Outlet } from "react-router-dom";
import useFirebaseConfig from "../hooks/useFirebaseConfig";

const PrivateRoutes = () => {
  const { user } = useFirebaseConfig();

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
