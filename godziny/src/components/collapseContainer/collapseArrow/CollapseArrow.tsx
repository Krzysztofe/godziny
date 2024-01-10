import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./_collapseArrow.scss";

type Props = {
  isOpen: boolean;
};

const CollapseArrow = (props: Props) => {
  return (
    <MdOutlineKeyboardArrowDown
      className={`fs-1 _fw-light _collapseArrow h-100 ${
        props.isOpen ? "_collapseArrow--rotate" : ""
      }`}
    />
  );
};

export default CollapseArrow;
