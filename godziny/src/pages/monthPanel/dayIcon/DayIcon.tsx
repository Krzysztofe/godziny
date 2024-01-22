import { MdFactory } from "react-icons/md";
import { TbArrowBigRightLineFilled } from "react-icons/tb";

type Props = {
  place: string;
};

const DayIcon = (props: Props) => {


  // const ras = (x: any, n: any): any => {
  //   if (n === 1) {
  //     return x;
  //   }

  //   return x * ras(x, n - 1);
  // };

  // console.log("", ras(2, 3));



  if (props.place === "Poza")
    return <TbArrowBigRightLineFilled className="text-light-emphasis" />;

  return <MdFactory className="text-light-emphasis" />;
};

export default DayIcon;
