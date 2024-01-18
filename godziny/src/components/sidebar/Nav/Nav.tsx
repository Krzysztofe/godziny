import ListGroup from "react-bootstrap/ListGroup";
import useDataNav from "./useDataNav";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../data/firebaseConfig";

type Props = {
  styles?: string;
};

const Nav = (props: Props) => {
  const { dataSidebarNavItems } = useDataNav();
  const [user] = useAuthState(auth);

  if (!user) return null;

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
};

export default Nav;
