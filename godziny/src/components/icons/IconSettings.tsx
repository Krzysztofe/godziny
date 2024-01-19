import { AiTwotoneSetting } from "react-icons/ai";

type Props = {
  styles?: string;
};

const IconSettings = (props: Props) => {
  return <AiTwotoneSetting className={props.styles} />;
};

export default IconSettings;
