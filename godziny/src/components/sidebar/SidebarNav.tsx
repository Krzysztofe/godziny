import ListGroup from "react-bootstrap/ListGroup";
import { AiTwotoneSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarLogout from "./SidebarLogout";
import SettingsReturnButton from "../../pages/settings/SettingsReturnButton";
import useURLValues from "../../hooks/useURLValues";

const SidebarNav = () => {
  const { isMonthInURL } = useURLValues();
  const styles = "bg-transparent border-0 p-0 ps-2";

  return (
    <nav className="mt-auto mb-2 fw-medium">
      <ListGroup>
        {!isMonthInURL && (
          <ListGroup.Item className={styles}>
            <SettingsReturnButton />
          </ListGroup.Item>
        )}
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
