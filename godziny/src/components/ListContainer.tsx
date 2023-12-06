import ListGroup from "react-bootstrap/ListGroup";
import { ReactNode } from "react";

type Props = {
  header: string;
  listContent: any[] | undefined | null;
  children: ReactNode;
};

const ListContainer = (props: Props) => {
  return (
    <>
      <h3 className="h6">{props.header}</h3>

      <ListGroup className="border-0 p-0">
        {!props.listContent && (
          <ListGroup.Item className="py-1 px-2 text-warning border-0">
            Brak danych
          </ListGroup.Item>
        )}
        {props.children}
      </ListGroup>
    </>
  );
};

export default ListContainer;
