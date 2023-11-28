import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import useMonthURLToString from "../../hooks/useMonthURLToString";
import { RootState } from "../../redux/store";
import CollapseMonthsList from "./CollapseMonthsList";

const CollapseMonths = () => {
  const [isOpen, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { isOpenCollapseMonths } = useSelector(
    (state: RootState) => state.monthsListCollapse
  );

  const { monthURLStringFormat } = useMonthURLToString();

  return (
    <div className="">
      <Button
        variant="outline-info"
        // onClick={() => dispatch(setIsOpenMonthsListCollapse())}
        // aria-expanded={isOpenCollapseMonths}
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={isOpen}
        aria-controls="example-collapse-text"
        size="sm"
        className="fw-medium w-100 mt-2 text-capitalize d-flex justify-content-between align-items-center"
      >
        {monthURLStringFormat}
        <MdOutlineKeyboardArrowDown
          className="fs-3"
          style={{
            transform: `${isOpen ? "rotate(180deg)" : ""} `,
            transitionDuration: "320ms",
          }}
        />
      </Button>
      <Collapse in={isOpen}>
        <div>
          <CollapseMonthsList />
        </div>
      </Collapse>
    </div>
  );
};

export default CollapseMonths;
