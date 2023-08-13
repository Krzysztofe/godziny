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
import "./../../pages/monthPanel/indexMonthPanel/_bgImage.scss";
import SidebarList from "./SidebarList";
import SidebarDayForm from "./sidebarDayForm/SidebarDayForm";
import SidebarHoursFormCollapse from "./sidebarHoursForm/SidebarHoursFormCollapse";
import SidebarMonthFormColapse from "./sidebarMonthFormCollapse/SidebarMonthFormColapse";
import useReduxDatabase from "./useReduxDatabase";

const IndexSidebar = () => {
  useReduxDatabase();
  const { isMonthInURL } = useURLValues();
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const { windowWidth } = useWindowWidth();
  const { monthURLStringFormat } = useMonthURLToString();

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(s => !s);

  useEffect(() => {
    windowWidth > 575 && setShow(true);
  }, [windowWidth]);

  let offCanvasWidth = "100%";
  if (windowWidth >= 576) {
    offCanvasWidth = "200px";
  }
  if (windowWidth >= 768) {
    offCanvasWidth = "230px";
  }
  if (windowWidth >= 992) {
    offCanvasWidth = "250px";
  }

  return (
    <>
      {!["/"].includes(pathname) ? (
        <aside>
          <Button
            variant="info"
            onClick={toggleShow}
            className={`rounded-0 p-0 fw-medium ${
              windowWidth > 575 ? "d-none" : "d-block"
            }`}
            style={{
              position: "absolute",
              height: "2.5rem",
              width: "100%",
              right: 0,
              bottom: 0,
            }}
          >
           Menu
          </Button>

          <Offcanvas
            show={show}
            onHide={handleClose}
            name="Disable backdrop"
            scroll={true}
            backdrop={false}
            className={`${windowWidth < 576 && "backgroundImage"} ${
              windowWidth < 576 && "border-0"
            } p-1 border-white`}
            style={{
              width: offCanvasWidth,
              backgroundColor:"rgba(255, 255, 255, 0.6)",
            }}
          >
            {windowWidth < 576 && (
              <Offcanvas.Header closeButton className="w-100">
                <div className="text-capitalize fw-medium">
                  {monthURLStringFormat}
                </div>
              </Offcanvas.Header>
            )}
            {isMonthInURL && (
              <Offcanvas.Body className="flex-grow-0 p-2 bg-white rounded">
                <SidebarMonthFormColapse />
                <SidebarHoursFormCollapse />
                {windowWidth < 576 ? (
                  <Row className="w-100 fw-medium ">
                    <MonthPanelHeaderSummary />
                  </Row>
                ) : null}

                <SidebarDayForm />
              </Offcanvas.Body>
            )}
            <SidebarList />
          </Offcanvas>
        </aside>
      ) : null}
    </>
  );
};

export default IndexSidebar;
