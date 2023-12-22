import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Toast from "./toast/Toast";

const ToastsSettingsContainer = () => {
  const { isMonthSuccess, isUserSuccess } = useSelector(
    (state: RootState) => state.requestSuccess
  );

  return (
    <>
      <Toast text={"Miesiąc zapisany"} isSuccess={isMonthSuccess} />
      <Toast text={"Użytkownik zapisany"} isSuccess={isUserSuccess} />
    </>
  );
};

export default ToastsSettingsContainer;
