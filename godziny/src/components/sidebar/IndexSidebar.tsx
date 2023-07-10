import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import SidebarTitle from "./SidebarTitle";
import SidebarDayForm from "./sidebarDayForm/SidebarDayForm";
import SidebarMonthForm from "./sidebarMonthForm/SidebarMonthForm";
import SidebarMonthCollapse from "./SidebarMonthCollapse";

const IndexSidebar = () => {
  const urlPrintNavBar = useLocation().pathname;

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


  return (
    <>
      {!["/"].includes(urlPrintNavBar) ? (
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
            className="bg-primary-subtle"
            style={{ width: 200 }}
          >
            <Offcanvas.Header className="pb-0">
              <SidebarTitle />
            </Offcanvas.Header>
            <Offcanvas.Body className="pt-0">
              <SidebarMonthForm />
              <SidebarMonthCollapse />
              <SidebarDayForm />
            </Offcanvas.Body>
          </Offcanvas>
        </aside>
      ) : null}
    </>
  );
};

export default IndexSidebar;
