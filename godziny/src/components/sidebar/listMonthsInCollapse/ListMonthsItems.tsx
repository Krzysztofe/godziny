import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useMonthDates from "../../../hooks/useMonthDates";
import useMonthURLToString from "../../../hooks/useMonthURLToString";
import { RootState } from "../../../redux/store";



const ListMonthsItems = () => {
  const { databaseMonthsDatesToString } = useMonthDates();
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { monthURLStringFormat } = useMonthURLToString();

  const isCurrentMonth = (month: string) => {
    return monthURLStringFormat !== month || !monthURLStringFormat
      ? "text-dark"
      : "text-primary";
  };



  return (
    <>
      {databaseMonthsDatesToString?.map((month: string, idx: number) => {
        return (
          <ListGroup.Item key={month} className="border-0 p-0 bg-transparent">
            <Link
              to={`/${listMonths?.[idx]}`}
              className={`${isCurrentMonth(
                month
              )} text-decoration-none text-capitalize`}
            >
              {month}
            </Link>
          </ListGroup.Item>
        );
      })}
    </>
  );
};

export default ListMonthsItems;
