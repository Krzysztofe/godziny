import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import SidebarMonthsList from "./sidebarMonthList/SidebarMonthsList";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SidebarMonthCollapse = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="info"
        className="fw-medium p-1 w-100 mt-1"
      >
        Wybierz miesiąc
        <MdOutlineKeyboardArrowDown
          className="fs-3 fw-medium"
          style={{
            transform: `${open ? "rotate(180deg)" : ""} `,
            transitionDuration: "320ms",
          }}
        />
      </Button>
      <Collapse in={open}>
        <div>
          <SidebarMonthsList />
        </div>
      </Collapse>
    </>
  );
};

export default SidebarMonthCollapse;
