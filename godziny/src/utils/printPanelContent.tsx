export const printPanelContent = (contentJSX: React.ReactNode) => (
  <div
    className="d-flex justify-content-center align-items-center fs-3 text-warning text-center"
    style={{
      maxWidth: "1000px",
      width: "100%",
      height: "100%",
    }}
  >
    {contentJSX}
  </div>
);

export const printPanelLoadingContent = (contentJSX: React.ReactNode) => (
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
