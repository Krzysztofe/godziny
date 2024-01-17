import ListGroup from "react-bootstrap/ListGroup";
import { dataStylesListItem } from "./stylesListContainer";

type Props = {
  noData: boolean;
  styles?: string;
};

const ListItemNoData = (props: Props) => {
  if (!props.noData) return null;

  return (
    <ListGroup.Item
      className={`${dataStylesListItem} ${props.styles} text-warning`}
    >
      Brak danych
    </ListGroup.Item>
  );
};

export default ListItemNoData;
