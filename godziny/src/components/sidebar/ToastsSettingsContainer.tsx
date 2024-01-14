import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Toast from "./toast/Toast";

const ToastsSettingsContainer = () => {
  const { isMonthSuccess, isUserSuccess } = useSelector(
    (state: RootState) => state.requestSuccess
  );

  return (
    <div className="position-absolute mt-4">
      <Toast text={"Miesiąc zapisany"} isSuccess={isMonthSuccess} />
      <Toast text={"Użytkownik zapisany"} isSuccess={isUserSuccess} />
    </div>
  );
};

export default ToastsSettingsContainer;
