import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

import "firebase/database";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiTwotoneSetting } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getInfoMonths } from "../../redux/storeFeatures/infoMonthsSlice";
import { useMonthsInfoQuery } from "../../services/apiSliceMonths";
import SidebarMonthCollapse from "./SidebarMonthCollapse";
import SidebarTitle from "./SidebarTitle";
import SidebarDayForm from "./sidebarDayForm/SidebarDayForm";
import SidebarMonthForm from "./sidebarMonthForm/SidebarMonthForm";

const firebaseConfig = {
  apiKey: "AIzaSyAvvdzLRow-8AdA5zJH6uv19MOsPLNwC3A",
  authDomain: "godziny-3b30f.firebaseapp.com",
  projectId: "godziny-3b30f",
  storageBucket: "godziny-3b30f.appspot.com",
  messagingSenderId: "367174950216",
  appId: "1:367174950216:web:0bd1ea3c1c77b5e797677d",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);




const IndexSidebar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(s => !s);

  const { data, error, isLoading } = useMonthsInfoQuery();

  useEffect(() => {
    dispatch(getInfoMonths(data));
    // dispatch(getMonthError(error));
    // dispatch(getMonthIsLoading(isLoading));
  }, [data, dispatch]);

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

  const fetchKeysOfNonNestedData = async () => {
    // console.log(ref(database));

    try {
      const snapshot = await get(ref(database));
       console.log("snapshot", snapshot.val());
      const keys: any = [];
      snapshot.forEach(childSnapshot => {
        const value = childSnapshot.val();
        if (typeof value !== "object") {
          keys.push(childSnapshot.key);
        }
      });
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  useEffect(() => {
    windowWidth > 575 && setShow(true);
    fetchKeysOfNonNestedData();
  }, [windowWidth]);

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
            className="bg-primary-subtle"
            style={{ width: 220 }}
          >
            <Offcanvas.Header className="pb-0">
              <SidebarTitle />
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column pt-0">
              <SidebarMonthForm />
              <SidebarMonthCollapse />
              <SidebarDayForm />

              <Link
                to="/ustawienia"
                className="text-info mt-auto fw-medium text-decoration-none "
              >
                <AiTwotoneSetting /> Ustawienia
              </Link>
            </Offcanvas.Body>
          </Offcanvas>
        </aside>
      ) : null}
    </>
  );
};

export default IndexSidebar;
