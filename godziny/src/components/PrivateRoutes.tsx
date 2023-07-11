import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../data/firebaseConfig";

const PrivateRoutes = () => {
  const [user] = useAuthState(auth);

  // console.log('',user)
  const email = "www@wp.pl";
  const atIndex = email.indexOf("@");
  const substring = email.substring(0, atIndex);
  
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
