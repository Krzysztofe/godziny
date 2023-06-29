import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import SidebarTitle from "./SidebarTitle";
import DayForm from "./dayForm/DayForm";
import MonthForm from "./monthForm/MonthForm";
import MonthsList from "./monthList/MonthsList";

const IndexSidebar = () => {
  const urlPrintNavBar = useLocation().pathname;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(s => !s);

  return (
    <>
      {!["/"].includes(urlPrintNavBar) ? (
        <>
          <Button
            variant="secondary"
            onClick={toggleShow}
            className="me-2"
            style={{ position: "absolute", right: 0 }}
          >
            <GiHamburgerMenu />
          </Button>

          <Offcanvas
            show={show}
            onHide={handleClose}
            name="Disable backdrop"
            scroll={true}
            backdrop={false}
            className="w-20 bg-primary-subtle"
            style={{ width: 200 }}
            
          >
            <Offcanvas.Header className="pb-0">
              <Offcanvas.Title>
                <SidebarTitle />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="pt-0">
              <MonthForm />
              <MonthsList />
              <DayForm />
            </Offcanvas.Body>
          </Offcanvas>
        </>
      ) : null}
    </>
  );
};

export default IndexSidebar;
