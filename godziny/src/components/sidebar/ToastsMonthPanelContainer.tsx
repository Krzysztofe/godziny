import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import Toast from "./toast/Toast";

const ToastsMonthPanelContainer = () => {
  const { isDaySuccess } = useSelector(
    (state: RootState) => state.requestSuccess
  );

  return (
    <div className="d-sm-none">
      <Toast text={"Dzień zapisany"} isSuccess={isDaySuccess} />
    </div>
  );
};

export default ToastsMonthPanelContainer;
