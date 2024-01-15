import { NavLink, useLocation } from "react-router-dom";
import { AiTwotoneSetting } from "react-icons/ai";
import useInPathname from "../../../hooks/useIsPathname";

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
        <AiTwotoneSetting className={`fs-2 ${inPathname && "me-3"} me-sm-0`} />
        <div className={`ms-1 ${inPathname && "d-none"} d-sm-block`}>
          Ustawienia
        </div>
      </div>
    </NavLink>
  );
};

export default ListLink;
