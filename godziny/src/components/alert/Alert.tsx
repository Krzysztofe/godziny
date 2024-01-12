import Button from "react-bootstrap/Button";
import { printAlert } from "../../redux/storeFeatures/alertSlice";
import { useDispatch } from "react-redux";
import "./_alert.scss";

type Props = {
  action: () => void;
  isPrinted: boolean;
  header: string;
  setIsPrinted?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Alert = (props: Props) => {
  const dispatch = useDispatch();
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      !["opacityContainer", "noButton"].includes((e.target as HTMLElement)?.id)
    )
      return;

    if (props?.setIsPrinted) props?.setIsPrinted(false);
    dispatch(printAlert(""));
  };

  return (
    <>
      {props.isPrinted ? (
        <div
          id="opacityContainer"
          className="fixed-top _d-center _alert"
          onClick={handleClose}
        >
          <div
            className={`p-5 bg-white _radius text-center fs-2 fw-medium _anim-dropDown`}
          >
            {props.header}
            <div className="_w-fitContent m-auto mt-4">
              {props.header.includes("Usunąć") ? (
                <>
                  <Button
                    id="noButton"
                    className="_radius bg-dark border-0 px-5"
                  >
                    Nie
                  </Button>
                  <Button
                    onClick={props.action}
                    className="_radius bg-primary border-0 px-5 ms-4 border "
                  >
                    Tak
                  </Button>
                </>
              ) : (
                <Button
                  id="noButton"
                  className="_radius _fs-3 bg-primary border-0 px-5 ms-4 border "
                  onClick={props.action}
                >
                  Ok
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Alert;
