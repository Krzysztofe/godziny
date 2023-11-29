import { ReactNode, useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  children: ReactNode;
  title: string;
};

const CollapseComponent = (props: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="outline-info"
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={isOpen}
        aria-controls="example-collapse-text"
        size="sm"
        className={`fw-medium w-100 d-flex justify-content-between align-items-center text-capitalize bg-info text-white ${
          isOpen ? "rounded-bottom-0" : "rounded-bottom-1"
        }`}
        style={{
          transition: "border-radius 420ms",
        }}
      >
        {props.title}
        <MdOutlineKeyboardArrowDown
          className="fs-3"
          style={{
            transform: `${isOpen ? "rotate(180deg)" : ""} `,
            transitionDuration: "320ms",
          }}
        />
      </Button>
      <Collapse in={isOpen}>
        <div className="border border-info rounded-bottom px-1">
          {props.children}
        </div>
      </Collapse>
    </>
  );
};

export default CollapseComponent;
