import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import CollapseArrow from "../../../../components/collapseContainer/collapseArrow/CollapseArrow";
import { RootState } from "../../../../redux/store";
import { setCollapseIndex } from "../../../../redux/storeFeatures/listMonthsSlice";
import ButtonDeleteMonth from "../buttonDeleteMonth/ButtonDeleteMonth";
import MonthTitle from "../monthTitle/MonthTitle";
import CollapseContent from "./CollapseContent";
import "./_colapseFormHours.scss";

type Props = {
  idx: number;
};

const CollapseFormHours = (props: Props) => {
  const dispatch = useDispatch();
  const { openCollapseIndex } = useSelector(
    (state: RootState) => state.listMonths
  );

  const isOpen = props.idx === openCollapseIndex;

  const handleTogle = (idx: number) => {
    dispatch(setCollapseIndex(idx));
    isOpen && dispatch(setCollapseIndex(-1));
  };

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
          className={`_radius _text-noWrap _fs-primary  border-0 p-0 ps-1 pe-4 position-relative`}
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
