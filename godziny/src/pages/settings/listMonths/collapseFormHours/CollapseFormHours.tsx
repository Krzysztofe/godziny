import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import CollapseArrow from "../../../../components/collapseContainer/collapseArrow/CollapseArrow";
import { RootState } from "../../../../redux/store";
import { setCollapseIndex } from "../../../../redux/storeFeatures/listMonthsSlice";
import ButtonDeleteMonth from "../buttonDeleteMonth/ButtonDeleteMonth";
import MonthTitle from "../monthTitle/MonthTitle";
import CollapseContent from "./CollapseContent";
import { useContext } from "react";
import { MonthItemContext } from "../ListMonths";

const CollapseFormHours = () => {
  const dispatch = useDispatch();
  const { openCollapseIndex } = useSelector(
    (state: RootState) => state.listMonths
  );
  const monthIdx = useContext(MonthItemContext);

  const isOpen = monthIdx === openCollapseIndex;

  const handleTogle = (idx: number) => {
    dispatch(setCollapseIndex(isOpen ? null : idx));
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <MonthTitle />
        <Button
          onClick={() => {
            handleTogle(monthIdx);
          }}
          aria-expanded={isOpen}
          aria-controls="example-collapse-text"
          size="sm"
          className={`_radius _text-noWrap _fs-small border-0  ps-2 pe-4 position-relative p-1`}
        >
          Zapisz godziny
          <CollapseArrow isOpen={isOpen} />
        </Button>
        <ButtonDeleteMonth />
      </div>
      <CollapseContent />
    </>
  );
};

export default CollapseFormHours;
