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
        className={` text-center d-block bg-primary py-2 pe-3 text-white w-100 position-relative _collapseContainer  _fs-collapse-header _fw-semiBold _radius
        
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
