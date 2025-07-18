import Collapse from "react-bootstrap/Collapse";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import FormHoursContainer from "../formHours/FormHoursContainer";
import { useContext } from "react";
import { MonthItemContext } from "../ListMonths";
import useDatabaseListMonths from "../../../../services/useDatabaseListMonths";

const CollapseContent = () => {
  const { openCollapseIndex } = useSelector(
    (state: RootState) => state.listMonths
  );
  const { listMonths } = useDatabaseListMonths();

  const monthIdx = useContext(MonthItemContext);

  const isOpen = monthIdx.monthIdx === openCollapseIndex;

  return (
    <Collapse in={isOpen}>
      <div className="pe-1">
        {isOpen ? (
          <FormHoursContainer />
        ) : (
          <div style={{ height: "88px" }}></div>
        )}
      </div>
    </Collapse>
  );
};

export default CollapseContent;
