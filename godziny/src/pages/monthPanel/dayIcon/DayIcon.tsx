import { MdFactory } from "react-icons/md";
import { TbArrowBigRightLineFilled } from "react-icons/tb";

type Props = {
  place: string;
};

const DayIcon = (props: Props) => {
  if (props.place === "Poza")
    return <TbArrowBigRightLineFilled className="text-light-emphasis" />;

  return <MdFactory className="text-light-emphasis" />;
};

export default DayIcon;
