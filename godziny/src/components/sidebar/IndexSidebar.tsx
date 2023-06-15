import { Link, useNavigate, useParams } from "react-router-dom";
import useDataBaseValues from "../../pages/monthPanel/hooksMonthPanel/useDataBaseValues";
import { useColumnsQuery } from "../../services/apiSlice";
import DayForm from "./dayForm/DayForm";
import MonthForm from "./monthForm/MonthForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const IndexSidebar = () => {
  const navigate = useNavigate();
  const { monthURL } = useParams();
  const { data } = useColumnsQuery(undefined);
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

  // const date = new Date();
  // const currYearNum = new Intl.DateTimeFormat("pl", {
  //   year: "numeric",
  // }).format(date);

  // const currMonthNum = new Intl.DateTimeFormat("pl", {
  //   month: "2-digit",
  // }).format(date);

  const url = databaseMonthsDatesSorted[databaseMonthsDatesSorted.length - 1];

  // useEffect(() => {
  //   const date = new Date();
  //   const currYearNum = new Intl.DateTimeFormat("pl", {
  //     year: "numeric",
  //   }).format(date);
  //   const currMonthNum = new Intl.DateTimeFormat("pl", {
  //     month: "2-digit",
  //   }).format(date);
  //   data && url && navigate(`/miesiac/${currYearNum}-${currMonthNum}`);
  // }, []);

  const urlPrintNavBar = useLocation().pathname;

  return (
    <>
      {!["/"].includes(urlPrintNavBar) ? (
        <div style={{ position: "fixed" }}>
          <MonthForm />

          {data === undefined || data === null ? (
            <p>Brak danych</p>
          ) : (
            databaseMonthsDatesToString.map((month: any, idx: any) => {
              return (
                <div key={month}>
                  <Link
                    to={`/miesiac/${databaseMonthsDatesSorted[idx]}`}
                    key={month}
                  >
                    {month}
                  </Link>
                </div>
              );
            })
          )}
          <DayForm />
        </div>
      ) : null}
    </>
  );
};

export default IndexSidebar;
