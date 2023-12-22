import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useMonthDates from "../hooks/useMonthDates";
import useURLValues from "../hooks/useURLValues";
import { RootState } from "../redux/store";


const CollapseMonthsList = () => {
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

  return (
    <ListGroup
      className="scrolHidden fs-7 fw-medium text-capitalize"
      style={{ height: "5rem" }}
    >
      {!listMonths && (
        <ListGroup.Item className="border-0 p-0 text-warning">
          Brak danych
        </ListGroup.Item>
      )}

      {databaseMonthsDatesToString?.map((month: string, idx: number) => {
        return (
          <ListGroup.Item key={month} className="border-0 p-0">
            <Link
              to={`/godziny/${listMonths?.[idx]}`}
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
      })}
    </ListGroup>
  );
};

export default CollapseMonthsList;
