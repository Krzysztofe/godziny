import { ReactNode } from "react";
import IndexSidebar from "./sidebar/IndexSidebar";

type Props = {
  children: ReactNode
};

const IndexContainer = (props: Props) => {
  return (
    <main
      className="d-flex backgroundImage"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <IndexSidebar />
      <div className="p-1 flex-fill">{props.children}</div>
    </main>
  );
};

export default IndexContainer;
