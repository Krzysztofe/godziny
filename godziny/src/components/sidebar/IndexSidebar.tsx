import "firebase/database";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";
import useMonthURLToString from "../../hooks/useMonthURLToString";
import useURLValues from "../../hooks/useURLValues";
import useWindowWidth from "../../hooks/useWindowWidth";
import MonthPanelHeaderSummary from "../../pages/monthPanel/monthPanelHeader/MonthPanelHeaderSummary";
import "./../../scss/utilityClasses/_bgImage.scss"
import SidebarNav from "./SidebarNav";
import SidebarHoursFormCollapse from "./sidebarHoursForm/SidebarHoursFormCollapse";
import SidebarMonthFormColapse from "./sidebarMonthFormCollapse/SidebarMonthFormColapse";
import useReduxDatabase from "./useReduxDatabase";
import SidebarMenuButton from "./SidebarMenuButton";
import MonthsCollapse from "../monthsLIstColapse/MonthPanelMonthsCollapse";
import SidebarHeader from "./SidebarHeader";
import FormDayContext from "./formDay/FormDayContext";

const IndexSidebar = () => {
  useReduxDatabase();
  const { isMonthInURL } = useURLValues();
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

              <Offcanvas.Body className="flex-grow-0 p-2 bg-white rounded">
                <SidebarMonthFormColapse />
                <MonthsCollapse />
                {/* <MonthPanelHeaderSummary /> */}
                <SidebarHoursFormCollapse />

                {isMonthInURL && <FormDayContext />}
              </Offcanvas.Body>
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
