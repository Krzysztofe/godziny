import { useContext } from "react";
import { MdFactory } from "react-icons/md";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { DayItemContext } from "../column/Column";

const DayIcon = () => {
  const { day } = useContext(DayItemContext);

  if (day.place === "Poza")
    return <TbArrowBigRightLineFilled className="text-light-emphasis" />;

  return <MdFactory className="text-light-emphasis" />;
};

export default DayIcon;
