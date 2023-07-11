import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import MonthPanelHeaderForm from "./formHeaderMonthPanel/MonhPanelHeaderForm";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MonthPanelHeaderCollapse = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className={`fw-medium w-100 mt-1 d-flex justify-content-center align-items-center bg-primary border-0 p-0 ${
          open ? "rounded-bottom-0" : ""
        }`}
      >
        Liczba godzin w miesiącu
        <MdOutlineKeyboardArrowDown
          className="fs-1 fw-medium"
          style={{
            transform: `${open ? "rotate(180deg)" : ""} `,
            transitionDuration: "320ms",
          }}
        />
      </Button>
      <Collapse in={open}>
        <div className="bg-white p-0">
          <MonthPanelHeaderForm />
        </div>
      </Collapse>
    </>
  );
};

export default MonthPanelHeaderCollapse;
