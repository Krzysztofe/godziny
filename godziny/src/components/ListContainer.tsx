import ListGroup from "react-bootstrap/ListGroup";
import { ReactNode } from "react";

type Props = {
  header: string;
  listContent: any[] | undefined | null;
  children: ReactNode;
};

const ListContainer = (props: Props) => {
  let print;
  if (props.listContent?.length === 0 || !props.listContent) {
    print = "Brak danych";
  }

  return (
    <>
      <h3 className="h6">
        {props.header}: {props.listContent?.length}
      </h3>

      <ListGroup className="border-0 p-0">
        <ListGroup.Item className="py-1 px-2 text-warning border-0">
          {print}
        </ListGroup.Item>

        {props.children}
      </ListGroup>
    </>
  );
};

export default ListContainer;
