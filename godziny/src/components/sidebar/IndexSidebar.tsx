import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../data/firebaseConfig";
import DayForm from "./dayForm/DayForm";
import MonthForm from "./monthForm/MonthForm";
import MonthsList from "./monthList/MonthsList";

const IndexSidebar = () => {
  const navigate = useNavigate();

  const urlPrintNavBar = useLocation().pathname;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(s => !s);

  const logout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <>
      {!["/"].includes(urlPrintNavBar) ? (
        <>
          <Button
            variant="primary"
            onClick={toggleShow}
            className="me-2"
            style={{ position: "absolute", right: 0, bottom:"60%" }}
          >
            <GiHamburgerMenu />
          </Button>
          <Offcanvas
            show={show}
            onHide={handleClose}
            name="Disable backdrop"
            scroll={true}
            backdrop={false}
            className="w-20"
            style={{ width: 200 }}
          >
            <Offcanvas.Header className="pb-0">
              <Offcanvas.Title>
                <div
                  onClick={logout}
                  className="fs-6 "
                  style={{ cursor: "pointer" }}
                >
                  Wyloguj
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
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
