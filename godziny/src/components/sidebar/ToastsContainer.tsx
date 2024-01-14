import { useSelector } from "react-redux";
import useInPathname from "../../hooks/useInPathname";
import { RootState } from "../../redux/store";
import Toast from "./toast/Toast";

const ToastsContainer = () => {
  const { isMonthSuccess, isUserSuccess, isDaySuccess } = useSelector(
    (state: RootState) => state.requestSuccess
  );

  const { inPathname: inMonthPanel } = useInPathname("202");
  const { inPathname: inSettings } = useInPathname("ustawienia");
  
  return (
    <>
      {inMonthPanel && (
        <Toast text={"Dzień zapisany"} isSuccess={isDaySuccess} />
      )}

      {inSettings && (
        <>
          <Toast text={"Miesiąc zapisany"} isSuccess={isMonthSuccess} />
          <Toast text={"Użytkownik zapisany"} isSuccess={isUserSuccess} />
        </>
      )}
    </>
  );
};

export default ToastsContainer;
