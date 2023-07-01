import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import FormHeaderMonhPanel from "./formHeaderMonthPanel/FormHeaderMonhPanel";

const MonthPanelHeaderCollapse = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="info"
        className="fw-medium w-100 mt-1"
      >
        Podaj liczbę godzin w miesiącu
      </Button>
      <Collapse in={open}>
        <div>
          <FormHeaderMonhPanel />
        </div>
      </Collapse>
    </>
  );
};

export default MonthPanelHeaderCollapse;
