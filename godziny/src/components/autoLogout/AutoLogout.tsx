import useAutoLogout from "./useAutoLogout";

const AutoLogout = () => {
  const { secondsRemaining } = useAutoLogout();

  useAutoLogout();
  return (
    <div>
      {secondsRemaining + 1 <= 60 && (
        <div
          id="opacityContainer"
          className="fixed-top d-flex justify-content-center align-items-center "
          style={{
            height: "100vh",
            zIndex: "1060",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <div className="p-4 bg-white rounded-1 fs-3 fw-medium alertAnimationDown d-flex">
            Wylogowanie nastąpi za
            <div
              style={{
                width: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {secondsRemaining + 1}
            </div>
            s.
            <div className="w-fit-content m-auto"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoLogout;
