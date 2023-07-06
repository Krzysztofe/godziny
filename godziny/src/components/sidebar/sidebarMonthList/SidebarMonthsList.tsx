import ListGroup from "react-bootstrap/ListGroup";
import { Link, useLocation } from "react-router-dom";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import { useMonthsDataQuery } from "../../../services/apiSlice";
import "./_monthList.scss";

const SidebarMonthsList = () => {
  const location = useLocation();
  const { data } = useMonthsDataQuery(undefined);
  const { databaseMonthsDatesSorted } = useDatabaseValues();

  const monthURL = location.pathname.split("/").slice(-1)[0];
  const monthURLToDateFormat = new Date(monthURL);
  
  const monthDates =
    data &&
    Object.values(data as { [key: string]: unknown }).flatMap(
        year => data && Object.values(year as { [key: string]: unknown })
      ).map(year => year.id);

  const monthURLStringFormat =
    monthURL &&
    new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthURLToDateFormat);

console.log(
  "",
  data &&
    Object.values(data as { [key: string]: unknown }).flatMap(
      year => data && Object.values(year as { [key: string]: unknown })
    ).map(year => year.id)
);

  return (
    <ListGroup className="monthListContainer bg-white border border-primary">
      {!data ? (
        <p className="py-1 px-2 text-warning text-center">Brak danych</p>
      ) : (
        monthDates.map((month: string, idx: number) => {
          return (
            <ListGroup.Item key={month} className="border-0 p-0 px-1">
              <Link
                to={`/${monthDates[idx]}`}
                className="text-decoration-none text-capitalize"
              >
                {month}
              </Link>
            </ListGroup.Item>
          );
        })
    //  <></>
        // )

        // databaseMonthsDatesToString.map((month: any, idx: any) => {
        //   return (
        //     <ListGroup.Item key={month} action className="border-0 p-0 px-1">
        //       <Link
        //         to={`/miesiac/${databaseMonthsDatesSorted[idx]}`}
        //         key={month}
        //         className={`${
        //           monthURLStringFormat !== month ? "text-reset" : "text-success"
        //         } text-decoration-none text-capitalize`}
        //       >
        //         {month}
        //       </Link>
        //     </ListGroup.Item>
        //   );
        // })
        // <></>
      )}
    </ListGroup>
  );
};

export default SidebarMonthsList;
