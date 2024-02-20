import "./_headerName.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import FirebaseSingleton from "../../../data/firebaseConfig";
import useIsPath from "../../../hooks/useIsPath";
import { memo } from "react";

const HeaderName = memo(() => {
  const firebaseInstance = FirebaseSingleton.getInstance();
  const auth = firebaseInstance.auth;
  const [user] = useAuthState(auth!);
  const { isPath } = useIsPath(["ustawienia", "202"]);

  const printTitle =
    user && isPath ? "d-none d-md-block" : "_headerName__outLoged";

  return (
    <div className={`_headerName ${printTitle} ps-3 ps-lg-4 `}>
      OZZ Inicjatywa Pracownicza
    </div>
  );
});

export default HeaderName;
