import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./_collapseArrow.scss";

type Props = {
  isOpen: boolean;
};

const CollapseArrow = (props: Props) => {
  return (
    <MdOutlineKeyboardArrowDown
      className={`fs-3 _collapseArrow ${
        props.isOpen ? "_collapseArrow--rotate" : ""
      }`}
    />
  );
};

export default CollapseArrow;
