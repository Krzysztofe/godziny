import { ReactNode } from "react";
import IndexSidebar from "./sidebar/IndexSidebar";
import useWindowWidth from "../hooks/useWindowWidth";

type Props = {
  children: ReactNode;
};

const IndexContainer = (props: Props) => {

   const { windowWidth } = useWindowWidth();
   
  return (
    <main
      className="d-flex backgroundImage"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <IndexSidebar />
      <div
        className="p-1"
        style={{
          width: windowWidth >= 576 ? "70%" : "100%",
        }}
      >
        {props.children}
      </div>
    </main>
  );
};

export default IndexContainer;
