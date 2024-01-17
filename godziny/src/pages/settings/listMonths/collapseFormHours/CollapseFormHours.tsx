import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ButtonDeleteMonth from "../buttonDeleteMonth/ButtonDeleteMonth";
import MonthTitle from "../monthTitle/MonthTitle";
import CollapseArrow from "../../../../components/collapseContainer/collapseArrow/CollapseArrow";
import { useDispatch } from "react-redux";
import { setCollapseIndex } from "../../../../redux/storeFeatures/listMonthsSlice";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import FormHoursContainer from "../formHours/FormHoursContainer";
import "./_colapseFormHours.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CollapseContent from "./CollapseContent";

type Props = {
  idx: number;
};

const CollapseFormHours = (props: Props) => {
  const dispatch = useDispatch();
  const { openCollapseIndex } = useSelector(
    (state: RootState) => state.listMonths
  );

  const { pathname } = useLocation();

  const isOpen = props.idx === openCollapseIndex;

  const handleTogle = (idx: number) => {
    dispatch(setCollapseIndex(idx));
    isOpen && dispatch(setCollapseIndex(-1));
  };

  useEffect(() => {
    dispatch(setCollapseIndex(-1));
  }, [pathname]);

  return (
    <>
      <div className="d-flex align-items-center">
        <MonthTitle idx={props.idx} />
        <Button
          onClick={() => {
            handleTogle(props.idx);
          }}
          aria-expanded={isOpen}
          aria-controls="example-collapse-text"
          size="sm"
          className={`_radius _text-noWrap _fs-primary _fw-semiBold border-0 p-0 ps-1 pe-4 position-relative`}
        >
          Zapisz godziny
          <CollapseArrow isOpen={isOpen} />
        </Button>
        <ButtonDeleteMonth idx={props.idx} />
      </div>

      <CollapseContent idx={props.idx} />
    </>
  );
};

export default CollapseFormHours;
