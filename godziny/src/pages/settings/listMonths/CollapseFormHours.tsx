import { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import DeleteButton from "./DeleteButton";
import MonthTitle from "./MonthTitle";
import CollapseArrow from "../../../components/CollapseArrow";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  setOpenCollapseIndex: React.Dispatch<React.SetStateAction<number | null>>;
  handleTogle: () => void;
  idx: number;
};

const CollapseFormHours = (props: Props) => {
  const handleClose = () => {
    props.setOpenCollapseIndex(-1);
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <MonthTitle idx={props.idx} />
        <Button
          onClick={() => {
            props.handleTogle();
            props.isOpen && handleClose();
          }}
          aria-expanded={props.isOpen}
          aria-controls="example-collapse-text"
          size="sm"
          className={`fw-medium fs-responsive d-flex justify-content-between align-items-center p-0 ps-1`}
          style={{
            transition: "border-radius 420ms",
          }}
        >
          Zapisz godziny
          <CollapseArrow isOpen={props.isOpen} />
        </Button>
        <DeleteButton idx={props.idx} />
      </div>
      <Collapse in={props.isOpen}>
        <div className=" pe-1">
          {props.isOpen ? (
            props.children
          ) : (
            <div style={{ height: "88px" }}></div>
          )}
        </div>
      </Collapse>
    </>
  );
};

export default CollapseFormHours;
