import ListGroup from "react-bootstrap/ListGroup";
import { AiTwotoneSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarLogout from "./SidebarLogout";
import SettingsReturnButton from "./SettingsReturnButton";
import useURLValues from "../../hooks/useURLValues";
import useWindowWidth from "../../hooks/useWindowWidth";

type Props = {
  handleClose: () => void;
};

const SidebarNav = (props: Props) => {
  const { windowWidth } = useWindowWidth();
  const { isMonthInURL } = useURLValues();
  const styles = "bg-transparent border-0 p-0 ps-2";

  const closeSidebar = () => {
    windowWidth < 500 && props.handleClose();
  };

  const returnButton = !isMonthInURL && <SettingsReturnButton />;

  const dataSidebarNavItems = [
    returnButton,
    <Link
      to="/godziny/ustawienia"
      className="text-primary text-decoration-none"
    >
      <AiTwotoneSetting /> Ustawienia
    </Link>,
    <SidebarLogout />,
  ];

  return (
    <nav className="mt-auto mb-2 fw-medium">
      <ListGroup>
        {dataSidebarNavItems.map((item, idx) => {
          return (
            <ListGroup.Item key={idx} className={styles} onClick={closeSidebar}>
              {item}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </nav>
  );
};

export default SidebarNav;
