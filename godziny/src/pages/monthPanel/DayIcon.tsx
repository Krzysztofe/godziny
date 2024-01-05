import { MdFactory } from "react-icons/md";
import { TbArrowBigRightLineFilled } from "react-icons/tb";

type Props = {
    place: string
}


const DayIcon = (props:Props) => {
  return (
    <div>
      {props.place === "Poza" ? (
        <TbArrowBigRightLineFilled style={{ color: "rgb(80,173,150)" }} />
      ) : (
        <MdFactory style={{ color: "rgb(255, 181, 9)" }} />
      )}
    </div>
  );
};

export default DayIcon;
