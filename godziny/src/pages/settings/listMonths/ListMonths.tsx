import ListGroup from "react-bootstrap/ListGroup";
import useMonthDates from "../../../hooks/useMonthDates";
import CollapseFormHours from "./collapseFormHours/CollapseFormHours";
import { dataStylesListItem } from "../../../components/listContainer/stylesListContainer";
import { createContext } from "react";
import { useAllMonthsQuery } from "../../../services/apiSliceMonths";

type ContextType = {
  monthIdx: number;
  monthLabel: string;
  year: number;
  month: number
};
export const MonthItemContext = createContext<ContextType>({} as ContextType);

const ListMonths = () => {
  const { data: months } = useAllMonthsQuery();

  const polishMonths = [
    "",
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];

  const transformed = months?.map(({ _id, year, month }) => {
    const monthNumber = parseInt(month, 10);
    return {
      _id,
      monthLabel: `${polishMonths[monthNumber]} ${year}`,
      year,
      month: monthNumber, 
    };
  });

  console.log("transformed", transformed);

  return (
    <>
      {transformed?.map((month, monthIdx) => (
        <ListGroup.Item key={month._id} className={dataStylesListItem}>
          <MonthItemContext.Provider
            value={{ monthIdx, monthLabel: month.monthLabel, year: month.year, month: month.month }}
          >
            <CollapseFormHours />
          </MonthItemContext.Provider>
        </ListGroup.Item>
      ))}
    </>
  );
};

export default ListMonths;
