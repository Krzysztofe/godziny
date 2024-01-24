import ListGroup from "react-bootstrap/ListGroup";
import useMonthDates from "../../../hooks/useMonthDates";
import CollapseFormHours from "./collapseFormHours/CollapseFormHours";
import { dataStylesListItem } from "../../../components/listContainer/stylesListContainer";
import { createContext } from "react";

type ContextType = number;
export const MonthItemContext = createContext<ContextType>({} as ContextType);

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
              <MonthItemContext.Provider value={idx}>
                <CollapseFormHours/>
              </MonthItemContext.Provider>
            </ListGroup.Item>
          );
        }
      )}
    </>
  );
};

export default ListMonths;
