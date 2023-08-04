import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SidebarMonthForm from "../sidebarMonthForm/SidebarMonthForm";


const SidebarMonthFormColapse = () => {
 const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline-info"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="fw-medium w-100 mt-2 "
        // className={`fw-medium w-100 mt-1 d-flex justify-content-center align-items-center bg-primary border-0 p-1 ${
        //   open ? "rounded-bottom-0" : ""
        // }`}
      >
        Miesiąc
        <MdOutlineKeyboardArrowDown
          className="fs-4 fw-medium"
          style={{
            transform: `${open ? "rotate(180deg)" : ""} `,
            transitionDuration: "320ms",
          }}
        />
      </Button>
      <Collapse in={open}>
        <div className="bg-white p-0">
          <SidebarMonthForm />
        </div>
      </Collapse>
    </>
  );
};

export default SidebarMonthFormColapse;
