import "./_toast.scss";

type Props = {
  text: string;
  isSuccess: boolean;
};

const Toast = (props: Props) => {
  return (
    <>
      {props.isSuccess && (
        <div
          className="rounded-1 p-2 mt-4 fw-medium text-white toastAnimation"
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            width: "200px",
          }}
        >
          {props.text}
        </div>
      )}
    </>
  );
};

export default Toast;
