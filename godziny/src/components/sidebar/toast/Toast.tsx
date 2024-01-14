import "./_toast.scss";

type Props = {
  text: string;
  isSuccess: boolean;
};

const Toast = (props: Props) => {
  return (
    <>
      {props.isSuccess && (
        <div className="rounded-1 p-2 fw-medium text-white _anim-toast _toast">
          {props.text}
        </div>
      )}
    </>
  );
};

export default Toast;
