import { MdFactory } from "react-icons/md";
import { TbArrowBigRightLineFilled } from "react-icons/tb";

type Props = {
  place: string;
};

const DayIcon = (props: Props) => {
  return (
    <div>
      {props.place === "Poza" ? (
        <TbArrowBigRightLineFilled className="text-light-emphasis" />
      ) : (
        <MdFactory className="text-light-emphasis" />
      )}
    </div>
  );
};

export default DayIcon;
