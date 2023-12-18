import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { closeAlert, agreeAlert } from "../../redux/storeFeatures/alertSlice";
import Button from "react-bootstrap/Button";
import "./_alert.scss";

const Alert = () => {
  const dispatch = useDispatch();
  const { isPrinted, header } = useSelector((state: RootState) => state.alert);

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      (e.target as HTMLElement)?.id !== "opacityContainer" &&
      (e.target as HTMLElement)?.id !== "noButton"
    )
      return;
    dispatch(agreeAlert(false));
    dispatch(closeAlert());
  };

  const handleAgree = () => {
    dispatch(agreeAlert(true));
  };

  return (
    <>
      {isPrinted ? (
        <div
          id="opacityContainer"
          className="fixed-top d-flex justify-content-center align-items-center "
          onClick={e => handleClose(e)}
          style={{
            height: "100vh",
            zIndex:"1060" ,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <div
            className={`p-4 bg-white rounded-1 fs-3 fw-medium ${
              isPrinted ? "alertAnimationDown" : "alertAnimationUp"
            }`}
          >
            {header}
            <div className="w-fit-content m-auto">
              {header.includes("Usunąć") ? (
                <>
                  <Button id="noButton">Nie</Button>
                  <Button
                    onClick={handleAgree}
                    className="bg-danger ms-4 border "
                  >
                    Tak
                  </Button>
                </>
              ) : (
                <Button id="noButton">Ok</Button>
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
