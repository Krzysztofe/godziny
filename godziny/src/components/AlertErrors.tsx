import { useDispatch } from "react-redux";
import Alert from "./alert/Alert";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { printAlert } from "../redux/storeFeatures/alertSlice";

const AlertErrors = () => {
  const dispatch = useDispatch();

  const { header } = useSelector((state: RootState) => state.alert);

  const closeAlert = () => {
    dispatch(printAlert(""));
  };

  return (
    <>
      {header && <Alert action={closeAlert} isPrinted={true} header={header} />}
    </>
  );
};

export default AlertErrors;
