import ListGroup from "react-bootstrap/ListGroup";
import useWindowWidth from "../../../hooks/useWindowWidth";
import useDataSidebarNav from "./useDataSidebarNav";
import { ReactNode } from "react";

type Props = {
  display?: string
};

const SidebarNav = (props:Props) => {
  const { windowWidth } = useWindowWidth();
  const { dataSidebarNavItems } = useDataSidebarNav();

  // const closeSidebar = () => {
  //   windowWidth < 650 && props.handleClose();
  // };

  return (
    <nav>
      <ListGroup className={props.display}>
        {dataSidebarNavItems.map((item, idx) => {
          return (
            <ListGroup.Item
              key={idx}
              className="bg-transparent border-0 text-dark p-0 ms-2"
              // onClick={closeSidebar}
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
