import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import FormHeaderMonhPanel from "./formHeaderMonthPanel/FormHeaderMonhPanel";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MonthPanelHeaderCollapse = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="info"
        className="fw-medium p-1 w-100 mt-1 d-flex justify-content-center align-items-center"
      >
       Liczba godzin w miesiącu
        <MdOutlineKeyboardArrowDown
          className="fs-2 fw-medium"
          style={{
            transform: `${open ? "rotate(180deg)" : ""} `,
            transitionDuration: "320ms",
          }}
        />
      </Button>
      <Collapse in={open}>
        <div className="bg-primary-subtle rounded p-1">
          <FormHeaderMonhPanel />
        </div>
      </Collapse>
    </>
  );
};

export default MonthPanelHeaderCollapse;
