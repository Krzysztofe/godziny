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
        className={`_fw-semiBold _fs-3 text-center _radius bg-primary py-2 text-white w-100 _collapseContainer position-relative 
        
        ${isOpen ? "rounded-bottom-0" : "_radius"}
        
        `}
      >
        {props.title}
        <CollapseArrow isOpen={isOpen} />
      </Button>
      <Collapse in={isOpen}>
        <div className="border border-primary _radius_bottom px-1">
          {props.children}
        </div>
      </Collapse>
    </>
  );
};

export default CollapseContainer;
