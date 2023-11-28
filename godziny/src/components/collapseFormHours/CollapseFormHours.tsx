import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import FormHours from "./FormHours";

const CollapseFormHours = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline-info"
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={isOpen}
        aria-controls="example-collapse-text"
        size="sm"
        className="fw-medium w-100 mt-2 d-flex justify-content-between align-items-center"
      >
        Zapisz godziny
        <MdOutlineKeyboardArrowDown
          className="fs-3"
          style={{
            transform: `${isOpen ? "rotate(180deg)" : ""} `,
            transitionDuration: "320ms",
          }}
        />
      </Button>
      <Collapse in={isOpen}>
        <div className="bg-white p-1">
          <FormHours />
        </div>
      </Collapse>
    </>
  );
};

export default CollapseFormHours;
