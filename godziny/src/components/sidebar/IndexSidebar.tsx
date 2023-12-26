import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation } from "react-router-dom";
import useReduxListMonths from "../../hooks/updateReduxDatabase/useReduxListMonths";
import useReduxListUsers from "../../hooks/updateReduxDatabase/useReduxListUsers";
import useWindowWidth from "../../hooks/useWindowWidth";
import SidebarBody from "./SidebarBody";
import SidebarHeader from "./SidebarHeader";
import SidebarMenuButton from "./SidebarMenuButton";
import SidebarNav from "./SidebarNav";
import ToastsMonthPanelContainer from "./ToastsMonthPanelContainer";
import ToastsSettingsContainer from "./ToastsSettingsContainer";

const IndexSidebar = () => {
  useReduxListUsers();
  useReduxListMonths();
  const { pathname } = useLocation();
  const [isShow, setShow] = useState(false);
  const { windowWidth } = useWindowWidth();

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(prev => !prev);

  useEffect(() => {
    windowWidth >= 500 && setShow(true);
  }, [windowWidth]);

  const printSidebar =
    pathname.includes("/godziny/ustawienia") ||
    pathname.includes("/godziny/202");

  return (
    <>
      {printSidebar && (
        <>
          <Offcanvas
            show={isShow}
            onHide={handleClose}
            name="Disable backdrop"
            scroll={true}
            backdrop={false}
            className={`${
              windowWidth <= 500 && "backgroundImage"
            } bg-transparent border-0`}
            style={{
              width: windowWidth >= 500 ? "30%" : "100vw",
              maxWidth: windowWidth >= 500 && "250px",
            }}
          >
            <div className="p-1 d-flex flex-column bg-opacity-white h-100">
            
              <SidebarHeader />
              <SidebarBody />
             
              <SidebarNav handleClose={handleClose} />
            </div>
          </Offcanvas>
          <SidebarMenuButton toggleShow={toggleShow} />
        </>
      )}
    </>
  );
};

export default IndexSidebar;
