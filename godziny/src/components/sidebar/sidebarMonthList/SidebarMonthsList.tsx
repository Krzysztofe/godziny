import ListGroup from "react-bootstrap/ListGroup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMonthsDataQuery } from "../../../services/apiSlice";
import useDatabaseValues from "../../../hooks/useMonthURLToString";
import "./monthList.scss";

const SidebarMonthsList = () => {
  const { data } = useMonthsDataQuery(undefined);
  const { monthURL } = useParams();
  const { databaseMonthsDatesSorted, databaseMonthsDatesToString } =
    useDatabaseValues(monthURL);

  return (
    <ListGroup className="monthListContainer bg-white">
      {!data ? (
        <p className="py-1 px-2 text-warning text-center">Brak danych</p>
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
