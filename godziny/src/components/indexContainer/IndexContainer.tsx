import { ReactNode } from "react";
import AutoLogout from "../autoLogout/AutoLogout";
import "./_indexContainer.scss";

type Props = {
  children: ReactNode;
};

const IndexContainer = (props: Props) => {
  return (
    <main className="d-flex m-0 _backgroundImage _indexContainer ">
      <aside className="_indexContainer__aside"></aside>
      <div className="d-flex ps-1 flex-fill _indexContainer__rightSide">
        <AutoLogout />
        {props.children}
      </div>
    </main>
  );
};

export default IndexContainer;
