import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ButtonDeleteMonth from "./buttonDeleteMonth/ButtonDeleteMonth";
import MonthTitle from "./MonthTitle";
import CollapseArrow from "../../../components/collapseContainer/CollapseArrow";
import { useDispatch } from "react-redux";
import { setCollapseIndex } from "../../../redux/storeFeatures/listMonthsSlice";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import FormHoursContainer from "./formHours/FormHoursContainer";

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
          className={`fw-medium fs-responsive d-flex justify-content-between align-items-center p-0 ps-1`}
        >
          Zapisz godziny
          <CollapseArrow isOpen={isOpen} />
        </Button>
        <ButtonDeleteMonth idx={props.idx} />
      </div>
      <Collapse in={isOpen}>
        <div className="pe-1">
          {isOpen ? (
            <FormHoursContainer idx={props.idx} />
          ) : (
            <div style={{ height: "88px" }}></div>
          )}
        </div>
      </Collapse>
    </>
  );
};

export default CollapseFormHours;
