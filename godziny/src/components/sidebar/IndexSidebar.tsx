import { Link, useNavigate, useParams } from "react-router-dom";
import useDataBaseValues from "../../pages/monthPanel/hooksMonthPanel/useDataBaseValues";
import { useColumnsQuery } from "../../services/apiSlice";
import DayForm from "./dayForm/DayForm";
import MonthForm from "./monthForm/MonthForm";
import { useEffect } from "react";

const IndexSidebar = () => {
  const navigate = useNavigate();
  const { monthURL } = useParams();
  const { data } = useColumnsQuery(undefined);
  const { databaseMonthsCollection } = useDataBaseValues(monthURL);

  const databaseMonthsDates =
    data && databaseMonthsCollection
      ? databaseMonthsCollection.map(month => month.month)
      : [];

  const databaseMonthsDatesToString =
    data &&
    databaseMonthsDates?.map((monthDate: any) => {
      const monthToDateFormat =
        data && databaseMonthsDates && new Date(monthDate);

      return new Intl.DateTimeFormat("pl-PL", {
        year: "numeric",
        month: "long",
        timeZone: "UTC",
      }).format(monthToDateFormat);
    });

  const uu = databaseMonthsDates[databaseMonthsDates.length - 1];

  // console.log("", databaseMonthsDates[databaseMonthsDates.length - 1]);

  // useEffect(() => {
  //   navigate(`/miesiac/${uu}`);
  // }, [databaseMonthsDates]);

  return (
    <div style={{ position: "fixed" }}>
      <MonthForm />

      {data === undefined || data === null ? (
        <p>Brak danych</p>
      ) : (
        databaseMonthsDatesToString.map((month: any, idx: any) => {
          return (
            <div key={month}>
              <Link to={`/miesiac/${databaseMonthsDates[idx]}`} key={month}>
                {month}
              </Link>
            </div>
          );
        })
      )}
      <DayForm />
    </div>
  );
};

export default IndexSidebar;
