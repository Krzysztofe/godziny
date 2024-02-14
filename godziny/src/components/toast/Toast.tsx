import "./_toast.scss";
import { RiMailSendLine } from "react-icons/ri";

type Props = {
  isSuccess: boolean;
};

const Toast = (props: Props) => {

  if (!props.isSuccess) return null;
  
  return (
    <div className="_radius text-center h-100 text-white _anim-toast _toast">
      <RiMailSendLine className="fs-2 h-100" />
    </div>
  );
};

export default Toast;