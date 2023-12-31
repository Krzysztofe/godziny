import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
isOpen: boolean
}


const CollapseArrow = (props:Props) => {
  return (
    <MdOutlineKeyboardArrowDown
      className="fs-3"
      style={{
        transform: `${props.isOpen ? "rotate(180deg)" : ""} `,
        transitionDuration: "320ms",
      }}
    />
  );
};

export default CollapseArrow;
