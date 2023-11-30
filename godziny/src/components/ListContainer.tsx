import ListGroup from "react-bootstrap/ListGroup";
import ListItemsMonths from "../pages/settings/ListItemsMonths";

type Props = {
  header: string;
  listContent: any[];
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
        <ListItemsMonths/>
      </ListGroup>
    </>
  );
};

export default ListContainer;
