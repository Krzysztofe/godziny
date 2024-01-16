import ListGroup from "react-bootstrap/ListGroup";
import useMonthDates from "../../../hooks/useMonthDates";
import CollapseFormHours from "./collapseFormHours/CollapseFormHours";
import { dataStylesListItem } from "../../../components/listContainer/dataListContainerStyles";


const ListMonths = () => {
  const { databaseMonthsDatesToString } = useMonthDates();

  return (
    <>
      {databaseMonthsDatesToString?.map(
        (monthDateToString: string, idx: number) => {
          return (
            <ListGroup.Item
              key={monthDateToString}
              className={dataStylesListItem}
            >
              <CollapseFormHours idx={idx} />
            </ListGroup.Item>
          );
        }
      )}
    </>
  );
};

export default ListMonths;
