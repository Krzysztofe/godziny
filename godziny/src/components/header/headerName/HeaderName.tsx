import "./_headerName.scss";
import useIsPath from "../../../hooks/useIsPath";
import { memo } from "react";
import useFirebaseConfig from "../../../hooks/useFirebaseConfig";

const HeaderName = memo(() => {
  const { user } = useFirebaseConfig();
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
