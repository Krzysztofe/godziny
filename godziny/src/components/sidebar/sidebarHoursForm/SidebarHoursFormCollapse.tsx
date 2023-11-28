import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SidebarHoursForm from "../SidebarHoursForm";
import useURLValues from "../../../hooks/useURLValues";

const SidebarHoursFormCollapse = () => {
  const { isMonthInURL } = useURLValues();
  const [open, setOpen] = useState(false);

  return (
    <>
      {isMonthInURL && (
        <>
          <Button
            variant="outline-info"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="fw-medium w-100 mt-2 "
          >
            Godziny
            <MdOutlineKeyboardArrowDown
              className="fs-5 fw-medium"
              style={{
                transform: `${open ? "rotate(180deg)" : ""} `,
                transitionDuration: "320ms",
              }}
            />
          </Button>
          <Collapse in={open}>
            <div className="bg-white p-0">
              <SidebarHoursForm />
            </div>
          </Collapse>
        </>
      )}
    </>
  );
};

export default SidebarHoursFormCollapse;
