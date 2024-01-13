import ListGroup from "react-bootstrap/ListGroup";
import { ReactNode } from "react";
import { dataStylesListGroupItem } from "../pages/settings/dataStylesSettingsLists";

type Props = {
  header: string;
  listContent: any[] | undefined | null;
  children: ReactNode;
};

const ListContainer = (props: Props) => {
  const listContent = !props.listContent || props.listContent?.length === 0;

  return (
    <>
      <h3 className="fs-2 py-4 text-center _fw-regular">
        {props.header}: {props.listContent?.length}
      </h3>

      <ListGroup className="border-0 p-0">
        {listContent && (
          <ListGroup.Item
            className={`${dataStylesListGroupItem} text-warning py-1`}
          >
            Brak danych
          </ListGroup.Item>
        )}

        {props.children}
      </ListGroup>
    </>
  );
};

export default ListContainer;
