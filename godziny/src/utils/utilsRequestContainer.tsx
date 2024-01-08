


export const requestContainer = (contentJSX: React.ReactNode) => (
  <div
    className="fixed-top _d-center fs-4"
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
