import { memo } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import useFirebaseConfig from "../../../hooks/useFirebaseConfig";
import useIsPath from "../../../hooks/useIsPath";
import useDataNav from "./useDataNav";

type Props = {
  styles?: string;
};

const Nav = memo((props: Props) => {
  const { user } = useFirebaseConfig();
  const { dataSidebarNavItems } = useDataNav();
  const { isPath } = useIsPath(["202", "ustawienia"]);

  if (!user || !isPath) return null;

  return (
    <nav>
      <ListGroup className={props.styles}>
        {dataSidebarNavItems.map((item, idx) => {
          return (
            <ListGroup.Item
              key={idx}
              className="bg-transparent border-0 text-dark p-0 ms-2"
            >
              {item}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </nav>
  );
});

export default Nav;
