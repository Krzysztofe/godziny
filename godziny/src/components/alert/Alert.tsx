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
            className={`p-4 bg-white rounded-1 fs-3 fw-medium _anim-dropDown`}
          >
            {props.header}
            <div className="_w-fit-content m-auto">
              {props.header.includes("Usunąć") ? (
                <>
                  <Button id="noButton">Nie</Button>
                  <Button
                    onClick={props.action}
                    className="bg-danger ms-4 border "
                  >
                    Tak
                  </Button>
                </>
              ) : (
                <Button id="noButton" onClick={props.action}>
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
