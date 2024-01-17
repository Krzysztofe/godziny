import ListGroup from "react-bootstrap/ListGroup";
import { dataStylesListItem } from "./dataListContainerStyles";

type Props = {
  noData: boolean;
  styles?: string
};

const ListItemNoData = (props: Props) => {
  
    if (!props.noData) return null;

  return (
    <div>
      <ListGroup.Item
        className={`${dataStylesListItem} ${props.styles} text-warning`}
      >
        Brak danych
      </ListGroup.Item>
    </div>
  );
};

export default ListItemNoData;
