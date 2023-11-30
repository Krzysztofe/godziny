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
      className="d-flex backgroundImage m-0"
      style={{ height: "100dvh", overflow: "hidden" }}
    >
      <IndexSidebar />
      <div
        className="d-flex ps-1 flex-fill"
        style={{
          width: windowWidth >= 500 ? "70%" : "100%",
        }}
      >
        {props.children}
      </div>
    </main>
  );
};

export default IndexContainer;