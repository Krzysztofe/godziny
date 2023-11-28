import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import useMonthURLToString from "../../hooks/useMonthURLToString";
import { RootState } from "../../redux/store";
import { setIsOpenMonthsListCollapse } from "../../redux/storeFeatures/monthsListCollapseSlice";
import MonthsCollapseList from "../monthsCollapse/MonthsCollapseList";

const MonthsCollapse = () => {
  const dispatch = useDispatch();
  const { isOpenCollapseMonths } = useSelector(
    (state: RootState) => state.monthsListCollapse
  );

  const { monthURLStringFormat } = useMonthURLToString();

  return (
    <div className="">
      <Button
        onClick={() => dispatch(setIsOpenMonthsListCollapse())}
        aria-controls="example-collapse-text"
        aria-expanded={isOpenCollapseMonths}
        size="sm"
        className="mx-auto text-capitalize bg-transparent text-start fw-medium d-flex justify-content-between align-items-center border-0"
      >
        {monthURLStringFormat}
        <MdOutlineKeyboardArrowDown
          className="fs-3"
          style={{
            transform: `${isOpenCollapseMonths ? "rotate(180deg)" : ""} `,
            transitionDuration: "320ms",
          }}
        />
      </Button>
      <Collapse in={isOpenCollapseMonths}>
        <div>
          <MonthsCollapseList />
        </div>
      </Collapse>
    </div>
  );
};

export default MonthsCollapse;
