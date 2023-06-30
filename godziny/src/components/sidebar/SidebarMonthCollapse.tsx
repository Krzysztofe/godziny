import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import SidebarMonthsList from "./sidebarMonthList/SidebarMonthsList";

const SidebarMonthCollapse = () => {
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
        Wybierz miesiąc
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
