import ListGroup from "react-bootstrap/ListGroup";
import CollapseFormHours from "./collapseFormHours/CollapseFormHours";
import { dataStylesListItem } from "../../../components/listContainer/stylesListContainer";
import { createContext } from "react";
import { useAllMonthsQuery } from "../../../services/apiSliceMonths";
import { polishMonths } from "../../../data/dataPolishMonths";

type ContextType = {
  monthIdx: number;
  monthLabel: string;
  year: number;
  month: number;
  id: string;
};
export const MonthItemContext = createContext<ContextType>({} as ContextType);

const ListMonths = () => {
  const { data: months } = useAllMonthsQuery();

  const transformedMonths = months?.map(({ _id, year, month }) => {
    const monthNumber = parseInt(month, 10);
    return {
      _id,
      monthLabel: `${polishMonths[monthNumber]} ${year}`,
      year,
      month: monthNumber,
    };
  });

  return (
    <>
      {transformedMonths?.map((month, monthIdx) => (
        <ListGroup.Item key={month._id} className={dataStylesListItem}>
          <MonthItemContext.Provider
            value={{
              monthIdx,
              monthLabel: month.monthLabel,
              year: month.year,
              month: month.month,
              id: month._id,
            }}
          >
            <CollapseFormHours />
          </MonthItemContext.Provider>
        </ListGroup.Item>
      ))}
    </>
  );
};

export default ListMonths;
