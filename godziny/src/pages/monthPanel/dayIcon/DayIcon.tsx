import { MdFactory } from "react-icons/md";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import "./_dayIcon.scss"

type Props = {
    place: string
}


const DayIcon = (props:Props) => {
  return (
    <div>
      {props.place === "Poza" ? (
        <TbArrowBigRightLineFilled className="_dayIcon__arrow" />
      ) : (
        <MdFactory className="_dayIcon__factory " />
      )}
    </div>
  );
};

export default DayIcon;
