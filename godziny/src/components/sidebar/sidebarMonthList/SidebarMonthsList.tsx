import ListGroup from "react-bootstrap/ListGroup";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useMonthsDataQuery } from "../../../services/apiSlice";
import useDatabaseValues from "../../../hooks/useMonthURLToString";
import "./_monthList.scss";
import useMonthURLToString from "../../../hooks/useCurrentDates";
import { TbTable } from "react-icons/tb";

const SidebarMonthsList = () => {
  const location = useLocation();
  const { data } = useMonthsDataQuery(undefined);
  const { databaseMonthsDatesSorted, databaseMonthsDatesToString } =
    useDatabaseValues();

  // const { monthURLStringFormat } = useMonthURLToString();

  const monthURL = location.pathname.split("/").slice(-1)[0];
  const monthURLToDateFormat = new Date(monthURL);

  const monthURLStringFormat =
    monthURL &&
    new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthURLToDateFormat);

  return (
    <ListGroup className="monthListContainer bg-white">
      {!data ? (
        <p className="py-1 px-2 text-warning text-center">Brak danych</p>
      ) : (
        databaseMonthsDatesToString.map((month: any, idx: any) => {
          return (
            <ListGroup.Item key={month} className="border-0 p-0 px-1 ">
              {monthURLStringFormat !== month ? (
                <Link
                  to={`/miesiac/${databaseMonthsDatesSorted[idx]}`}
                  key={month}
                  className="text-reset text-decoration-none text-capitalize"
                >
                  {month}
                </Link>
              ) : (
                <Link
                  to={`/miesiac/${databaseMonthsDatesSorted[idx]}`}
                  key={month}
                  className="text-success text-decoration-none text-capitalize"
                >
                  {month}
                </Link>
              )}
            </ListGroup.Item>
          );
        })
      )}
    </ListGroup>
  );
};

export default SidebarMonthsList;
