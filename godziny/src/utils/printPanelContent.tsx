export const printPanelContent = (contentJSX: React.ReactNode) => (
  <div
    className=" d-flex justify-content-center align-items-center fs-3 text-warning text-center"
    style={{
      maxWidth: "1000px",
      width: "100%",
      height: "100%",
    }}
  >
    {contentJSX}
  </div>
);