import { Link, useNavigate, useParams } from "react-router-dom";
import useDataBaseValues from "../../pages/monthPanel/hooksMonthPanel/useDataBaseValues";
import { useColumnsQuery } from "../../services/apiSlice";
import DayForm from "./dayForm/DayForm";
import MonthForm from "./monthForm/MonthForm";

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
    databaseMonthsDates &&
    databaseMonthsDates?.map((monthDate: any) => {
      const monthToDateFormat = databaseMonthsDates && new Date(monthDate);
      return new Intl.DateTimeFormat("pl-PL", {
        year: "numeric",
        month: "long",
        timeZone: "UTC",
      }).format(monthToDateFormat);
    });

  // useEffect(() => {
  //   navigate(`/miesiac/${year}`);
  // }, [databaseMonthsDates]);



  return (
    <div style = {{ position: "fixed"}}>
      <MonthForm />

      {data === null ? (
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
