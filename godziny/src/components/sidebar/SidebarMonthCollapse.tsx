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
        size="sm"
        className="p-0 px-1 border border-primary w-100 mt-1 text-start bg-white fw-medium d-flex justify-content-between align-items-center"
      >
        Wybierz miesiąc
        <MdOutlineKeyboardArrowDown
          className="fs-3 me-1"
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
