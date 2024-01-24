import "./_headerName.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../data/firebaseConfig";
import useIsPath from "../../../hooks/useIsPath";

const HeaderName = () => {
  const [user] = useAuthState(auth);
  const { isPath } = useIsPath(["ustawienia", "202"]);

  const printTitle =
    user && isPath ? "d-none d-md-block text-end" : "_headerName__outLoged";

  return (
    <div className={`_headerName ${printTitle}`}>
      OZZ Inicjatywa Pracownicza
    </div>
  );
};

export default HeaderName;
