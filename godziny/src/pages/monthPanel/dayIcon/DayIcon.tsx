import { useContext } from "react";
import { MdFactory } from "react-icons/md";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { DayItemContext } from "../column/Column";

const DayIcon = () => {
  const { day } = useContext(DayItemContext);

  if (day.place === "Poza")
    return <TbArrowBigRightLineFilled className="text-icons-primary " />;

  return <MdFactory className="text-icons-primary " />;
};

export default DayIcon;
