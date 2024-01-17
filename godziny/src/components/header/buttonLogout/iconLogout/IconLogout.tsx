import { FaUserCircle } from "react-icons/fa";
import "./_iconLogout.scss";
import useInPathname from "../../../../hooks/useIsPathname";

const IconLogout = () => {
  const { inPathname } = useInPathname("202");

  return (
    <div className=" d-flex align-items-center text-light-emphasis w-100">
      <FaUserCircle className="fs-2 " />
      <span className={`ms-1 ${inPathname ? "_iconLogout" : ""}`}>Wyloguj</span>
    </div>
  );
};

export default IconLogout;
