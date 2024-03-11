import ListGroup from "react-bootstrap/ListGroup";
import { dataStylesListItem } from "./stylesListContainer";

type Props = {
  styles?: string;
};

const ListItemNoData = (props: Props) => {
  
  
  return (
    <ListGroup.Item
      className={`${dataStylesListItem} ${props.styles} text-danger`}
    >
      Brak danych
    </ListGroup.Item>
  );
};

export default ListItemNoData;
