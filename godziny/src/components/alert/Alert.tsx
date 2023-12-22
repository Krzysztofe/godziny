import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { printAlert } from "../../redux/storeFeatures/alertSlice";
import "./_alert.scss";

type Props = {
  action: () => void;
  isPrinted: boolean;
  setIsPrinted?: React.Dispatch<React.SetStateAction<boolean>>;
  header: string;
};

const Alert = (props: Props) => {
  const dispatch = useDispatch();

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      (e.target as HTMLElement)?.id !== "opacityContainer" &&
      (e.target as HTMLElement)?.id !== "noButton"
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
          className="fixed-top d-flex justify-content-center align-items-center "
          onClick={e => handleClose(e)}
          style={{
            height: "100vh",
            zIndex: "1060",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <div
            className={`p-4 bg-white rounded-1 fs-3 fw-medium alertAnimationDown`}
          >
            {props.header}
            <div className="w-fit-content m-auto">
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
