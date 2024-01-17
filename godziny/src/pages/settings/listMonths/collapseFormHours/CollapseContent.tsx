import Collapse from "react-bootstrap/Collapse";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import FormHoursContainer from "../formHours/FormHoursContainer";

type Props = {
  idx: number;
};

const CollapseContent = (props: Props) => {
  const { openCollapseIndex } = useSelector(
    (state: RootState) => state.listMonths
  );

  const isOpen = props.idx === openCollapseIndex;

  return (
    <Collapse in={isOpen}>
      <div className="pe-1">
        {isOpen ? (
          <FormHoursContainer idx={props.idx} />
        ) : (
          <div style={{ height: "88px" }}></div>
        )}
      </div>
    </Collapse>
  );
};

export default CollapseContent;
