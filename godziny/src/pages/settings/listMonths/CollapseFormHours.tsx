import { ReactNode, useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import MonthTitle from "./MonthTitle";
import DeleteButton from "./DeleteButton";

type Props = {
  monthDateToString?: string | null;
  monthDate?: string | null;
  children: ReactNode;
  isOpen: boolean;
  setOpenCollapseIndex: React.Dispatch<React.SetStateAction<number | null>>;
  isOpenCollapse: boolean;
  onToggle: () => void;
  idx: number;
  setMonthDate: React.Dispatch<React.SetStateAction<string>>;
};

const CollapseFormHours = (props: Props) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    props.setOpenCollapseIndex(-1);
    setOpen(prev => !prev);
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <MonthTitle title={props.monthDateToString} idx = {props.idx}/>
        <Button
          onClick={() => {
            props.onToggle();
            props.isOpen && handleOpen();
      
          }}
          aria-expanded={isOpen}
          aria-controls="example-collapse-text"
          size="sm"
          className={`fw-medium fs-responsive d-flex justify-content-between align-items-center p-0 ps-1`}
          style={{
            transition: "border-radius 420ms",
          }}
        >
          Zapisz godziny
          <MdOutlineKeyboardArrowDown
            className="fs-3"
            style={{
              transform: `${props.isOpen ? "rotate(180deg)" : ""} `,
              transitionDuration: "320ms",
            }}
          />
        </Button>
        <DeleteButton
          idx={props.idx}
          monthDate={props.monthDate}
          setMonthDate={props.setMonthDate}
        />
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
