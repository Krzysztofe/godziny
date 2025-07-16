import "./_headerName.scss";
import useIsPath from "../../../hooks/useIsPath";
import { memo } from "react";

const HeaderName = memo(() => {
  
  const { isPath } = useIsPath(["ustawienia", "202"]);

  const printTitle =
   isPath ? "d-none d-md-block" : "_headerName__outLoged";

  return (
    <div className={`_headerName ${printTitle} ps-3 ps-lg-4 `}>
      OZZ Inicjatywa Pracownicza
    </div>
  );
});

export default HeaderName;
