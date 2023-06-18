import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useColumnsQuery } from "../../services/apiSlice";
import useDataBaseValues from "../../pages/monthPanel/useDataBaseValues";

const MonthsList = () => {
  const { data } = useColumnsQuery(undefined);
  const { monthURL } = useParams();
  const { databaseMonthsCollection } = useDataBaseValues(monthURL);

  const databaseMonthsDatesSorted =
    data && databaseMonthsCollection
      ? databaseMonthsCollection
          .map(month => month.month)
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
    <>
      {data === undefined || data === null ? (
        <p>Brak danych</p>
      ) : (
        databaseMonthsDatesToString.map((month: any, idx: any) => {
          return (
            <ListGroup key={month}>
              <ListGroup.Item className="border-0 p-0 px-1">
                <Link
                  to={`/miesiac/${databaseMonthsDatesSorted[idx]}`}
                  key={month}
                  style={{ textDecoration: "none" }}
                >
                  {month}
                </Link>
              </ListGroup.Item>
            </ListGroup>
          );
        })
      )}
    </>
  );
};

export default MonthsList;
