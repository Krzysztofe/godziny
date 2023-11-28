import "firebase/database";
import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation } from "react-router-dom";
import useURLValues from "../../hooks/useURLValues";
import useWindowWidth from "../../hooks/useWindowWidth";
import "./../../scss/utilityClasses/_bgImage.scss";
import SidebarBody from "./SidebarBody";
import SidebarHeader from "./SidebarHeader";
import SidebarMenuButton from "./SidebarMenuButton";
import SidebarNav from "./SidebarNav";
import useReduxDatabase from "./useReduxDatabase";

const IndexSidebar = () => {
  useReduxDatabase();
  const { pathname } = useLocation();
  const [isShow, setShow] = useState(false);
  const { windowWidth } = useWindowWidth();

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(s => !s);

  useEffect(() => {
    windowWidth > 575 && setShow(true);
  }, [windowWidth]);

  return (
    <>
      {!["/"].includes(pathname) && (
        <aside
          style={{
            width: windowWidth >= 576 ? "30%" : 0,
            maxWidth: "250px",
            height: "100%",
          }}
        >
          <Offcanvas
            show={isShow}
            onHide={handleClose}
            name="Disable backdrop"
            scroll={true}
            backdrop={false}
            className={`${windowWidth < 576 && "backgroundImage"}`}
            style={{
              width: windowWidth >= 576 ? "30%" : "100vw",
              maxWidth: windowWidth >= 576 && "250px",
              backgroundColor: "rgba(255, 255, 255, 0)",
            }}
          >
            <div
              className="p-1 d-flex flex-column"
              style={{
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <SidebarHeader />
              <SidebarBody />
              <SidebarNav />
            </div>
          </Offcanvas>
          <SidebarMenuButton toggleShow={toggleShow} />
        </aside>
      )}
    </>
  );
};

export default IndexSidebar;
