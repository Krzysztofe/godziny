import ListGroup from "react-bootstrap/ListGroup";
import { AiTwotoneSetting } from "react-icons/ai";
import { NavLink } from "react-router-dom";
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

  const closeSidebar = () => {
    windowWidth < 500 && props.handleClose();
  };

  const returnButton = !isMonthInURL && <SettingsReturnButton />;

  const dataSidebarNavItems = [
    returnButton,
    <NavLink
      to="/godziny/ustawienia"
      className={({ isActive }) =>
        isActive
          ? "text-dark text-decoration-none"
          : "text-primary text-decoration-none"
      }
      end
    >
      <>
        <AiTwotoneSetting /> Ustawienia
      </>
    </NavLink>,
    <SidebarLogout />,
  ];

  return (
    <nav className="mt-auto mb-2 fw-medium">
      <ListGroup>
        {dataSidebarNavItems.map((item, idx) => {
          return (
            <ListGroup.Item
              key={idx}
              className="bg-transparent border-0 text-dark p-0 ps-2"
              onClick={closeSidebar}
            >
              {item}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </nav>
  );
};

export default SidebarNav;
