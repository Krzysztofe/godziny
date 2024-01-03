


export const printContentContainer = (contentJSX: React.ReactNode) => (
  <div
    className="fixed-top d-flex justify-content-center align-items-center"
    style={{
      width: "100vw",
      height: "100vh",
      zIndex: "1060",
      backgroundColor: "rgba(255,255,255,0.4)",
    }}
  >
    {contentJSX}
  </div>
);
