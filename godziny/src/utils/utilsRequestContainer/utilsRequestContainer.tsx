import "./_utilsRequestContainer.scss";

export const requestContainer = (contentJSX: React.ReactNode) => (
  <div className="fixed-top _d-center fs-4 _requestContainer">{contentJSX}</div>
);
