import "./_headerName.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../data/firebaseConfig";

const HeaderName = () => {
  const [user] = useAuthState(auth);
  

  return (
    <div
      className={`_headerName ${
        user ? "d-none d-md-block text-end" : "_headerName__outLoged"
      }`}
    >
      OZZ Inicjatywa Pracownicza
    </div>
  );
};

export default HeaderName;
