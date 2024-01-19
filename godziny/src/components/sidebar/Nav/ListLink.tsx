import { NavLink } from "react-router-dom";
import useInPathname from "../../../hooks/useIsPathname";
import IconSettings from "../../icons/IconSettings";

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
        <IconSettings styles={`fs-2 ${inPathname && "me-3"} me-sm-0`} />
        <div className={`ms-1 ${inPathname && "d-none"} d-sm-block`}>
          Ustawienia
        </div>
      </div>
    </NavLink>
  );
};

export default ListLink;
