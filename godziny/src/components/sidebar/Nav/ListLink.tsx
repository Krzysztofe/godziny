import { NavLink } from "react-router-dom";
import IconSettings from "./IconSettings";
import useIsPath from "../../../hooks/useIsPath";

const ListLink = () => {
  const { isPath } = useIsPath(["202"]);

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
        <div className={`ms-1 ${isPath && "d-none"} d-sm-block`}>
          Ustawienia
        </div>
      </div>
    </NavLink>
  );
};

export default ListLink;
