import { printAlert } from "../../redux/storeFeatures/alertSlice";
import { useDispatch } from "react-redux";
import "./_alert.scss";
import ButtonAlertAccept from "./buttonsAlert/ButtonAlertAccept";
import ButtonAlertDelete from "./buttonsAlert/ButtonAlertDelete";
import { memo, useEffect } from "react";

type Props = {
  action: () => void;
  isPrinted: boolean;
  header: string;
  setIsPrinted?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Alert = memo((props: Props) => {
  const dispatch = useDispatch();

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      !["opacityContainer", "noButton"].includes((e.target as HTMLElement)?.id)
    )
      return;

    if (props?.setIsPrinted) props?.setIsPrinted(false);
    dispatch(printAlert(""));
  };

  // console.log("alert", props.isPrinted);

  if (!props.isPrinted) return null;

  return (
    <>
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
              <ButtonAlertDelete action={props.action} />
            ) : (
              <ButtonAlertAccept action={props.action} />
            )}
          </div>
        </div>
      </div>
    </>
  );
});

export default Alert;
