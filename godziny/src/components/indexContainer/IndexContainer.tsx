import { ReactNode } from "react";
import AutoLogout from "../autoLogout/AutoLogout";
import "./_indexContainer.scss";

type Props = {
  children: ReactNode;
};

const IndexContainer = (props: Props) => {
  return (
    <main className="d-flex m-0  bg-secondary _indexContainer ">
      <aside className="_indexContainer__aside"></aside>

      <div className="_indexContainer__rightSide bg-secondary">
        <AutoLogout />
        {props.children}
      </div>
    </main>
  );
};

export default IndexContainer;
