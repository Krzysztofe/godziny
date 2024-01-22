import { NavLink } from "react-router-dom";
import useInPathname from "../../../hooks/useIsPathname";
import IconSettings from "./IconSettings";

const ListLink = () => {
  const { inPathname } = useInPathname("202");

  return (
    <NavLink
      to="/ustawienia"
      className={({ isActive }) =>
        isActive
          ? "text-primary text-decoration-none"
          : "text-light-emphasis text-decoration-none"
      }
      end
    >
      <div className="_align-center">
        <IconSettings />
        <div className={`ms-1 ${inPathname && "d-none"} d-sm-block`}>
          Ustawienia
        </div>
      </div>
    </NavLink>
  );
};

export default ListLink;
