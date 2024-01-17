import useAutoLogout from "./useAutoLogout";
import "./_autoLogout.scss";

const AutoLogout = () => {
  const { secondsRemaining } = useAutoLogout();

  return (
    <>
      {secondsRemaining + 1 <= 60 && (
        <div className="fixed-top _d-center p-5 _autoLogout">
          <div className="p-4 bg-white text-center rounded-1 _fs-primary fw-semiBold _anim-dropDown">
            Wylogowanie nastąpi za
            <div className="d-flex mx-auto _w-fitContent">
              {secondsRemaining + 1} <div>&nbsp;s.</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AutoLogout;
