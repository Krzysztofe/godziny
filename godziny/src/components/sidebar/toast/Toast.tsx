import "./_toast.scss";
import useIsSucces from "./useIsSucces";
import { RiMailSendLine } from "react-icons/ri";

type Props = {
  text: string;
  isSuccess: boolean;
};

const Toast = (props: Props) => {
  const { isSuccess } = useIsSucces(props.isSuccess);

  // if (!isSuccess) return <></>;
  return (
    <>
      <div className="_radius p-1 text-center   text-white _anim-toast _toast">
        <RiMailSendLine className="fs-2"/>
      </div>
    </>
  );
};

export default Toast;
