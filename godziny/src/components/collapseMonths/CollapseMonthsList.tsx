import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useMonthDates from "../../hooks/useMonthDates";
import useURLValues from "../../hooks/useURLValues";
import { RootState } from "../../redux/store";
import "./_collapseMonthsList.scss";

const CollapseMonthsList = () => {
  const { sortedInfoMonths, databaseMonthsDatesToString } = useMonthDates();
  const { infoMonths } = useSelector((state: RootState) => state.infoMonths);
  const { monthURL, isMonthInURL } = useURLValues();

  const monthURLToDateFormat = isMonthInURL ? new Date(monthURL) : null;

  const curMonthURLStringFormat =
    monthURLToDateFormat &&
    new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthURLToDateFormat);

  return (
    <ListGroup className="monthListContainer fw-medium border text-capitalize">
      {!infoMonths || infoMonths.length === 0 ? (
        <p className="py-1 px-2 text-warning">Brak danych</p>
      ) : (
        databaseMonthsDatesToString?.map((month: string, idx: number) => {
          return (
            <ListGroup.Item
              key={month}
              className="border-0 p-0 px-1"
            >
              <Link
                to={`/${sortedInfoMonths?.[idx]}`}
                className={`${
                  curMonthURLStringFormat !== month || !curMonthURLStringFormat
                    ? "text-dark"
                    : "text-info"
                } text-decoration-none`}
              >
                {month}
              </Link>
            </ListGroup.Item>
          );
        })
      )}
    </ListGroup>
  );
};

export default CollapseMonthsList;
