import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useMonthDates from "../../../hooks/useMonthDates";
import useURLValues from "../../../hooks/useURLValues";
import { RootState } from "../../../redux/store";
import "./_listMonthsInCollapse.scss";

const ListMonthsInCollapse = () => {
  const { databaseMonthsDatesToString } = useMonthDates();
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { monthURL, isMonthInURL } = useURLValues();

  const monthURLToDateFormat = isMonthInURL ? new Date(monthURL) : null;

  const curMonthURLStringFormat =
    monthURLToDateFormat &&
    new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthURLToDateFormat);

  const noDataMessage = (listlength: number | undefined) => {
    return listlength === 0 ? (
      <ListGroup.Item className="border-0 p-0 text-warning ">
        Brak danych
      </ListGroup.Item>
    ) : null;
  };

  return (
    <ListGroup className="_scrolHidden _ListMonthsInCollapse fs-3 text-capitalize ">
      {noDataMessage(listMonths?.length)}

      {databaseMonthsDatesToString?.map((month: string, idx: number) => {
        return (
          <ListGroup.Item key={month} className="border-0 p-0 bg-transparent">
            <Link
              to={`/${listMonths?.[idx]}`}
              className={`${
                curMonthURLStringFormat !== month || !curMonthURLStringFormat
                  ? "text-dark"
                  : "text-primary"
              } text-decoration-none`}
            >
              {month}
            </Link>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default ListMonthsInCollapse;
