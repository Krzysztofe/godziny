import ListGroup from "react-bootstrap/ListGroup";
import { Link, useLocation } from "react-router-dom";
import useMonthDates from "../../../hooks/useMonthDates";
import { useMonthsDataQuery } from "../../../services/apiSlice";
import "./_monthList.scss";
import useSidebarURLValues from "../../../hooks/useSidebarURLValues";

const SidebarMonthsList = () => {
  const { data } = useMonthsDataQuery(undefined);
  const { monthDates } = useMonthDates(data);
  const { monthURL } = useSidebarURLValues();

  const databaseMonthsDatesToString = monthDates?.map((monthDate: any) => {
    const monthToDateFormat = new Date(monthDate);
    return new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthToDateFormat);
  });

  const monthURLToDateFormat = new Date(monthURL);

  const monthURLStringFormat =
    monthURL &&
    new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthURLToDateFormat);

  return (
    <ListGroup className="monthListContainer bg-white border border-primary">
      {!data ? (
        <p className="py-1 px-2 text-warning text-center">Brak danych</p>
      ) : (
        databaseMonthsDatesToString.map((month: string, idx: number) => {
          return (
            <ListGroup.Item key={month} className="border-0 p-0 px-1">
              <Link
                to={`/${monthDates[idx]}`}
                className={`${
                  monthURLStringFormat !== month ? "text-reset" : "text-success"
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
