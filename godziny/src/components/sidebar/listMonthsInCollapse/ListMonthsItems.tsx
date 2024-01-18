import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useMonthDates from "../../../hooks/useMonthDates";
import useURLValues from "../../../hooks/useURLValues";
import { RootState } from "../../../redux/store";

const ListMonthsItems = () => {
  const { databaseMonthsDatesToString } = useMonthDates();
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { monthURL, isMonthInURL } = useURLValues();
  const monthURLToDateFormat = isMonthInURL ? new Date(monthURL) : null;

  const curMonthURLStringFormat =
    monthURLToDateFormat &&
    new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthURLToDateFormat);

  const isCurrentMonth = (month: string) => {
    return curMonthURLStringFormat !== month || !curMonthURLStringFormat
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
