import { ReactNode } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListItemNoData from "./ListItemNoData";

type Props = {
  header: string;
  listContent: any[] | undefined | null;
  children: ReactNode;
};

const ListContainer = (props: Props) => {
  const noData = !props.listContent || props.listContent?.length === 0;
  const headerCounter = !props.listContent ? 0 : props.listContent?.length

  return (
    <>
      <h3 className="fs-2 py-4 text-center _fw-regular">
        {props.header}: {headerCounter}
      </h3>

      <ListGroup className="border-0 p-0">
        <ListItemNoData noData={noData} />

        {props.children}
      </ListGroup>
    </>
  );
};

export default ListContainer;
