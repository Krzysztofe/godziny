import { FaUserCircle } from "react-icons/fa";
import "./_iconLogout.scss";
import useIsPath from "../../../../hooks/useIsPath";

const IconLogout = () => {
  const { isPath } = useIsPath(["202"]);

  return (
    <div className=" d-flex align-items-center text-light-emphasis w-100">
      <FaUserCircle className="fs-2 text-light-emphasis  " />
      <span className={`ms-1 ${isPath ? "_iconLogout" : ""}`}>Wyloguj</span>
    </div>
  );
};

export default IconLogout;
