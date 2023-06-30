import ListGroup from "react-bootstrap/ListGroup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMonthsDataQuery } from "../../../services/apiSlice";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import "./monthList.scss";

const SidebarMonthsList = () => {
  const { data } = useMonthsDataQuery(undefined);
  const { monthURL } = useParams();
  const { databaseMonthsCollection } = useDatabaseValues(monthURL);
 

  const databaseMonthsDatesSorted =
    data && databaseMonthsCollection
      ? databaseMonthsCollection
          .map(month => month.monthDate)
          .sort((date1: any, date2: any) => {
            if (date1 < date2) {
              return -1;
            } else if (date1 > date2) {
              return 1;
            } else {
              return 0;
            }
          })
      : [];

  const databaseMonthsDatesToString =
    data &&
    databaseMonthsDatesSorted?.map((monthDate: any) => {
      const monthToDateFormat =
        data && databaseMonthsDatesSorted && new Date(monthDate);

      return new Intl.DateTimeFormat("pl-PL", {
        year: "numeric",
        month: "long",
        timeZone: "UTC",
      }).format(monthToDateFormat);
    });

  return (
    <ListGroup className="monthListContainer bg-white">
      {!data ? (
        <p className="py-1 px-2">Brak danych</p>
      ) : (
        databaseMonthsDatesToString.map((month: any, idx: any) => {
          return (
            <ListGroup.Item key={month} className="border-0 p-0 px-1 ">
              <Link
                to={`/miesiac/${databaseMonthsDatesSorted[idx]}`}
                key={month}
                style={{ textDecoration: "none", color: "black" }}
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
