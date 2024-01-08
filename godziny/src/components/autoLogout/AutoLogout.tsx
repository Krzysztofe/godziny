import useAutoLogout from "./useAutoLogout";
import "./_autoLogout.scss"

const AutoLogout = () => {
  const { secondsRemaining } = useAutoLogout();
  useAutoLogout();

  return (
    <div>
      {secondsRemaining + 1 <= 60 && (
        <div
          id="opacityContainer"
          className="fixed-top _d-center _autoLogout"
        >
          <div className="p-4 bg-white rounded-1 fs-3 fw-medium _anim-dropDown">
            Wylogowanie nastąpi za
            <div className="d-flex mx-auto _w-fit-content">
              {secondsRemaining + 1} <div>&nbsp;s.</div>
            </div>
            <div className="_w-fit-content m-auto"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoLogout;
