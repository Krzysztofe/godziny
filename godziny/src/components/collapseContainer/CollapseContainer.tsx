import { ReactNode, useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import CollapseArrow from "./collapseArrow/CollapseArrow";
import "./_collapseContainer.scss";

type Props = {
  children: ReactNode;
  title: string;
};

const CollapseContainer = (props: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="outline-primary"
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={isOpen}
        aria-controls="example-collapse-text"
        size="sm"
        className={`fw-medium _fs-responsive d-flex justify-content-between align-items-center bg-primary text-white w-100 _collapseContainer ${
          isOpen ? "rounded-bottom-0" : "rounded-bottom-1"
        }`}
      >
        {props.title}
        <CollapseArrow isOpen={isOpen} />
      </Button>
      <Collapse in={isOpen}>
        <div className="border border-primary rounded-bottom px-1">
          {props.children}
        </div>
      </Collapse>
    </>
  );
};

export default CollapseContainer;
