import "firebase/database";
import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation } from "react-router-dom";
import useWindowWidth from "../../hooks/useWindowWidth";
import SidebarBody from "./SidebarBody";
import SidebarHeader from "./SidebarHeader";
import SidebarMenuButton from "./SidebarMenuButton";
import SidebarNav from "./SidebarNav";
import useReduxListUsers from "../../hooks/updateReduxDatabase/useReduxListUsers";
import useReduxListMonths from "../../hooks/updateReduxDatabase/useReduxListMonths";
import useReduxMonthData from "../../hooks/updateReduxDatabase/useReduxMonthData";
import Alert from "../Alert";

const IndexSidebar = () => {
  useReduxListUsers();
  useReduxListMonths();
  useReduxMonthData();

  const { pathname } = useLocation();
  const [isShow, setShow] = useState(false);
  const { windowWidth } = useWindowWidth();

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(prev => !prev);

  useEffect(() => {
    windowWidth >= 500 && setShow(true);
  }, [windowWidth]);

  return (
    <>
      {!["/"].includes(pathname) && (
        <>
          <Alert />
          <Offcanvas
            show={isShow}
            onHide={handleClose}
            name="Disable backdrop"
            scroll={true}
            backdrop={false}
            className={`${
              windowWidth <= 500 && "backgroundImage"
            } bg-transparent`}
            style={{
              width: windowWidth >= 500 ? "30%" : "100vw",
              maxWidth: windowWidth >= 500 && "250px",
            }}
          >
            <div className="p-1 d-flex flex-column bg-opacity-white h-100">
              <SidebarHeader />
              <SidebarBody />
              <SidebarNav />
            </div>
          </Offcanvas>
          <SidebarMenuButton toggleShow={toggleShow} />
        </>
      )}
    </>
  );
};

export default IndexSidebar;
