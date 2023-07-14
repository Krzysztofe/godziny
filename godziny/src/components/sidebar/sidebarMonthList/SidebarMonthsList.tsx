import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import useMonthDates from "../../../hooks/useMonthDates";
import useURLValues from "../../../hooks/useURLValues";
import { useMonthsDataQuery } from "../../../services/apiSliceMonths";
import "./_monthList.scss";

const SidebarMonthsList = () => {
  const { data } = useMonthsDataQuery(undefined);
  const { monthDates, databaseMonthsDatesToString } = useMonthDates();
  const { monthURL } = useURLValues();

  const isMonthInURL = /^\d{4}-\d{2}$/.test(monthURL);

  const monthURLToDateFormat = isMonthInURL ? new Date(monthURL) : null;

  const curMonthURLStringFormat =
    monthURLToDateFormat &&
    new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthURLToDateFormat);

  return (
    <ListGroup className="monthListContainer bg-white rounded-0 border border-primary">
      {!data ? (
        <p className="py-1 px-2 text-warning text-center">Brak danych</p>
      ) : (
        databaseMonthsDatesToString?.map((month: string, idx: number) => {
          return (
            <ListGroup.Item key={month} className="border-0 p-0 px-1">
              <Link
                to={`/${monthDates?.[idx]}`}
                className={`${
                  curMonthURLStringFormat !== month || !curMonthURLStringFormat
                    ? "text-reset"
                    : "text-warning"
                } text-decoration-none text-capitalize`}
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

export default SidebarMonthsList;
