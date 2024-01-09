import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation } from "react-router-dom";
import useReduxListMonths from "../../../hooks/updateReduxDatabase/useReduxListMonths";
import useReduxListUsers from "../../../hooks/updateReduxDatabase/useReduxListUsers";
import useWindowWidth from "../../../hooks/useWindowWidth";
import SidebarBody from "../SidebarBody";
import SidebarHeader from "../SidebarHeader";
import SidebarMenuButton from "../sidebarMenuButton/SidebarMenuButton";
import SidebarNav from "../sidebarNav/SidebarNav";
import "./_indexSidebar.scss";
import FilterColumns from "../../filterColumns/FilterColumns";


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
    pathname.includes("/ustawienia") ||
    pathname.includes("/202");

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
              windowWidth <= 500 && "_backgroundImage"
            } bg-transparent border-0 _offcanvas`}
          >
            <div className="p-1 d-flex flex-column _bg-opacity-white h-100">
              <SidebarHeader />
              <SidebarBody />
              {/* <FilterColumns /> */}
              <Debounce/>
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
