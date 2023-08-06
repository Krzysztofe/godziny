import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import useMonthDates from "../../../hooks/useMonthDates";
import SettingsMonthsListItem from "./SettingsMonthsListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const SettingsMonthsList = () => {
  const { sortedInfoMonths, databaseMonthsDatesToString } = useMonthDates();
  const { infoMonths } = useSelector((state: RootState) => state.infoMonths);

  return (
    <Col className="col-9 col-sm-9 col-md-6 col-xl-3 col-xxl-3 me-md-auto">
      <h3 className="h4" style={{}}>
        Usuń miesiąc
      </h3>
      <ListGroup className="border-0 bg-primary-subtle p-0">
        {!infoMonths ? (
          <p className="py-1 px-2 fs-4 text-warning">Brak danych</p>
        ) : (
          databaseMonthsDatesToString?.map(
            (monthDateToString: string, idx: number) => {
              return (
                <SettingsMonthsListItem
                  monthDateToString={monthDateToString}
                  monthDate={sortedInfoMonths[idx]}
                  key={monthDateToString}
                />
              );
            }
          )
        )}
      </ListGroup>
    </Col>
  );
};

export default SettingsMonthsList;
