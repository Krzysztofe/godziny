import { AiTwotoneSetting } from "react-icons/ai";
import useInPathname from "../../../hooks/useIsPathname";



const IconSettings = () => {
   const { inPathname } = useInPathname("202");

  return (
    <AiTwotoneSetting className={`fs-2 ${inPathname && "me-3"} me-sm-0`} />
  );
};

export default IconSettings;
