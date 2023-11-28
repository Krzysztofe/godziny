import ListGroup from "react-bootstrap/ListGroup";
import { AiTwotoneSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarLogout from "./SidebarLogout";

const SidebarNav = () => {
  const styles = "bg-transparent border-0 p-0 ps-2";

  return (
    <nav
      className="mt-auto mb-2 fw-medium"
    >
      <ListGroup>
        <ListGroup.Item className={styles}>
          <Link to="/ustawienia" className="text-info text-decoration-none">
            <AiTwotoneSetting /> Ustawienia
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className={styles}>
          <SidebarLogout />
        </ListGroup.Item>
      </ListGroup>
    </nav>
  );
};

export default SidebarNav;
