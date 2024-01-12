import { NavLink } from "react-router-dom";
import { AiTwotoneSetting } from "react-icons/ai";

const ListLink = () => {
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
        <AiTwotoneSetting className="fs-2 me-3" />{" "}
        <div className="ms-1 d-none d-sm-block">Ustawienia</div>
      </div>
    </NavLink>
  );
};

export default ListLink;
