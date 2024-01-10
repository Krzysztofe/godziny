import useAutoLogout from "./useAutoLogout";
import "./_autoLogout.scss";

const AutoLogout = () => {
  const { secondsRemaining } = useAutoLogout();

  return (
    <div>
      {secondsRemaining + 1 <= 60 && (
        <div
          id="opacityContainer"
          className="fixed-top _d-center p-5 _autoLogout"
        >
          <div className="p-5 bg-white rounded-1 _fs-3 fw-medium _anim-dropDown">
            Wylogowanie nastąpi za
            <div className="d-flex mx-auto _w-fitContent">
              {secondsRemaining + 1} <div>&nbsp;s.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoLogout;
