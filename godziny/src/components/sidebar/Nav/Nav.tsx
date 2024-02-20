import ListGroup from "react-bootstrap/ListGroup";
import useDataNav from "./useDataNav";
import { useAuthState } from "react-firebase-hooks/auth";
import FirebaseSingleton from "../../../data/firebaseConfig";
import useIsPath from "../../../hooks/useIsPath";
import { memo } from "react";

type Props = {
  styles?: string;
};

const Nav = memo((props: Props) => {
  const firebaseInstance = FirebaseSingleton.getInstance();
  const auth = firebaseInstance.auth;
  const { dataSidebarNavItems } = useDataNav();
  const [user] = useAuthState(auth!);
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
