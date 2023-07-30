import "firebase/database";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiTwotoneSetting } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  getInfoMonthError,
  getInfoMonthIsLoading,
  getInfoMonths,
} from "../../redux/storeFeatures/infoMonthsSlice";
import { useMonthsInfoQuery } from "../../services/apiSliceMonths";
import SidebarMonthCollapse from "./SidebarMonthCollapse";
import SidebarTitle from "./SidebarTitle";
import SidebarDayForm from "./sidebarDayForm/SidebarDayForm";
import SidebarMonthForm from "./sidebarMonthForm/SidebarMonthForm";
import useReduxDatabase from "../../useReduxDatabase";
import MonthPanelHeaderForm from "../../pages/monthPanel/monthPanelHeader/formHeaderMonthPanel/MonhPanelHeaderForm";
import SidebarHoursForm from "./SidebarHoursForm";
import MonthPanelHeaderSummary from "../../pages/monthPanel/monthPanelHeader/MonthPanelHeaderSummary";
import "./../../pages/monthPanel/indexMonthPanel/_bgImage.scss";

const IndexSidebar = () => {
  useReduxDatabase();
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(s => !s);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    windowWidth > 575 && setShow(true);
  }, [windowWidth]);

  let offCanvasWidth = "100%";
  if (windowWidth > 575) {
    offCanvasWidth = "35%";
  }
  if (windowWidth > 766) {
    offCanvasWidth = "25%";
  }

  return (
    <>
      {!["/"].includes(pathname) ? (
        <aside>
          <Button
            variant="info"
            onClick={toggleShow}
            className={`me-2 p-2 mt-1  ${
              windowWidth > 575 ? "d-none" : "d-block"
            }`}
            style={{ position: "absolute", right: 0, borderRadius: "50%" }}
          >
            <GiHamburgerMenu className="fs-1" />
          </Button>

          <Offcanvas
            show={show}
            onHide={handleClose}
            name="Disable backdrop"
            scroll={true}
            backdrop={false}
            style={{
              width: offCanvasWidth,
              backgroundColor: windowWidth > 575 && "rgba(255, 255, 255, 0)",
            }}
          >
            <div className={`${windowWidth < 575 && "backgroundImage"}`}>
              <div style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                <Offcanvas.Header
                  closeButton={windowWidth < 575}
                  className="pb-0"
                >
                  <SidebarTitle />
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column pt-0 w-0 m-3 bg-white">
                  <SidebarMonthForm />
                  <SidebarHoursForm />
                  {windowWidth < 575 ? <MonthPanelHeaderSummary /> : null}
                  <SidebarMonthCollapse />
                  <SidebarDayForm />

                  <Link
                    to="/ustawienia"
                    className="text-info mt-auto fw-medium text-decoration-none "
                  >
                    <AiTwotoneSetting /> Ustawienia
                  </Link>
                </Offcanvas.Body>
              </div>
            </div>
          </Offcanvas>
        </aside>
      ) : null}
    </>
  );
};

export default IndexSidebar;
