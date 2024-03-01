import { ReactNode } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListItemNoData from "./ListItemNoData";

type Props = {
  listContent: any[] | undefined | null;
  children: ReactNode;
};

const ListContainer = (props: Props) => {
  const noData = !props.listContent || props.listContent?.length === 0;

  return (
    <ListGroup>
      <ListItemNoData noData={noData} />
      {props.children}
    </ListGroup>
  );
};

export default ListContainer;
