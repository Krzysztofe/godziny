import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const jwt = localStorage.getItem("token");

  return jwt ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;