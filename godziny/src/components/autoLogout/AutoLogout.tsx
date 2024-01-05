import useAutoLogout from "./useAutoLogout";

const AutoLogout = () => {
  const { secondsRemaining } = useAutoLogout();
  useAutoLogout();

  return (
    <div>
      {secondsRemaining + 1 <= 60 && (
        <div
          id="opacityContainer"
          className="fixed-top d-flex d-center"
          style={{
            height: "100vh",
            zIndex: "1060",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <div className="p-4 bg-white rounded-1 fs-3 fw-medium alertAnimationDown">
            Wylogowanie nastąpi za
            <div className="d-flex mx-auto w-fit-content">
              {secondsRemaining + 1} <div>&nbsp;s.</div>
            </div>
            <div className="w-fit-content m-auto"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoLogout;
