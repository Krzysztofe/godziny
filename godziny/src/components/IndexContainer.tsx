import { ReactNode } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import useReduxDatabase from "./sidebar/useReduxDatabase";
import useReduxMonthData from "./sidebar/useReduxMonthData";
import useURLValues from "../hooks/useURLValues";

type Props = {
  children: ReactNode;
};

const IndexContainer = (props: Props) => {



  // useReduxMonthData();



  useReduxDatabase();

  const { windowWidth } = useWindowWidth();
  return (
    <main
      className="d-flex backgroundImage m-0"
      style={{ height: "100dvh", overflow: "hidden" }}
    >
      <aside
        style={{
          width: windowWidth >= 500 ? "30%" : 0,
          maxWidth: "250px",
          height: "100%",
        }}
      ></aside>
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
