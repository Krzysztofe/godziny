import { AiTwotoneSetting } from "react-icons/ai";
import useIsPath from "../../../hooks/useIsPath";

const IconSettings = () => {
  const { isPath } = useIsPath(["ustawienia"]);

  return (
    <AiTwotoneSetting
      className={`fs-2 text-icons-primary ${!isPath && "me-3"} me-sm-0`}
    />
  );
};

export default IconSettings;
