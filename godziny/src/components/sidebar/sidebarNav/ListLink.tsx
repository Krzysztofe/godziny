import { NavLink, useLocation } from "react-router-dom";
import { AiTwotoneSetting } from "react-icons/ai";

const ListLink = () => {
  const { pathname } = useLocation();
  const printInMonth = pathname.includes("202");

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
        <AiTwotoneSetting className={`fs-2 ${printInMonth && "me-3"} me-sm-0`} />
        <div className={`ms-1 ${printInMonth && "d-none"} d-sm-block`}>
          Ustawienia
        </div>
      </div>
    </NavLink>
  );
};

export default ListLink;
