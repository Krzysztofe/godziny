import "firebase/database";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiTwotoneSetting } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import MonthPanelHeaderSummary from "../../pages/monthPanel/monthPanelHeader/MonthPanelHeaderSummary";
import useReduxDatabase from "./useReduxDatabase";
import "./../../pages/monthPanel/indexMonthPanel/_bgImage.scss";
import SidebarTitle from "./SidebarTitle";
import SidebarDayForm from "./sidebarDayForm/SidebarDayForm";
import SidebarHoursFormCollapse from "./sidebarHoursForm/SidebarHoursFormCollapse";
import SidebarMonthFormColapse from "./sidebarMonthFormCollapse/SidebarMonthFormColapse";
import useURLValues from "../../hooks/useURLValues";
import useWindowWidth from "../../hooks/useWindowWidth";
import useMonthURLToString from "../../hooks/useMonthURLToString";
import Row from "react-bootstrap/Row";

const IndexSidebar = () => {
  useReduxDatabase();
  const { isMonthInURL } = useURLValues();
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const { windowWidth } = useWindowWidth();

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
  if (windowWidth >=992) {
    offCanvasWidth = "250px";
  }

  return (
    <>
      {!["/"].includes(pathname) ? (
        <aside>
          <Button
            variant="info"
            onClick={toggleShow}
            className={`rounded-0 p-0 ${
              windowWidth > 575 ? "d-none" : "d-block"
            }`}
            style={{
              position: "absolute",
              height: "2.5rem",
              width: "110%",
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
              backgroundColor: windowWidth > 575 && "rgba(255, 255, 255, 0.4)",
            }}
          >
            <Offcanvas.Header
              closeButton={windowWidth < 576}
              className="ms-auto"
            ></Offcanvas.Header>
            {isMonthInURL && (
              <Offcanvas.Body className="flex-grow-0 p-2 bg-white rounded">
                <SidebarMonthFormColapse />
                <SidebarHoursFormCollapse />
                {windowWidth < 576 ? (
                  <Row className="w-100 fw-medium ">
                    {" "}
                    <MonthPanelHeaderSummary />{" "}
                  </Row>
                ) : null}

                <SidebarDayForm />
              </Offcanvas.Body>
            )}
            <Link
              to="/ustawienia"
              className="text-info mt-auto fw-medium text-decoration-none "
            >
              <AiTwotoneSetting /> Ustawienia
            </Link>

            <SidebarTitle />
          </Offcanvas>
        </aside>
      ) : null}
    </>
  );
};

export default IndexSidebar;
