import ListGroup from "react-bootstrap/ListGroup";
import useWindowWidth from "../../../hooks/useWindowWidth";
import useDataSidebarNav from "./useDataSidebarNav";

type Props = {
  handleClose: () => void;
};

const SidebarNav = (props: Props) => {
  const { windowWidth } = useWindowWidth();
  const { dataSidebarNavItems } = useDataSidebarNav();

  const closeSidebar = () => {
    windowWidth < 500 && props.handleClose();
  };

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
