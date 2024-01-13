import ListGroup from "react-bootstrap/ListGroup";
import useMonthDates from "../../../hooks/useMonthDates";
import { dataStylesListGroupItem } from "../dataStylesSettingsLists";
import CollapseFormHours from "./collapseFormHours/CollapseFormHours";

const ListMonths = () => {
  const { databaseMonthsDatesToString } = useMonthDates();

  return (
    <>
      {databaseMonthsDatesToString?.map(
        (monthDateToString: string, idx: number) => {
          return (
            <ListGroup.Item
              key={monthDateToString}
              className={dataStylesListGroupItem}
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
