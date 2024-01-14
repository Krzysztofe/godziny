import "./_toast.scss";

type Props = {
  text: string;
  isSuccess: boolean;
};

const Toast = (props: Props) => {
  return (
    <>
      {props.isSuccess && (
        <div className="_radius p-1 fs-3 fw-medium text-center text-white _anim-toast _toast">
          {props.text}
        </div>
      )}
    </>
  );
};

export default Toast;
