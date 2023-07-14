import ListGroup from "react-bootstrap/ListGroup";
import useMonthDates from "../../../hooks/useMonthDates";
import SettingsMonthsListItem from "./SettingsMonthsListItem";

const SettingsMonthsList = () => {
  const { monthDates, databaseMonthsDatesToString } = useMonthDates();

  return (
    <>
      <h3 className="h4">Lista miesięcy</h3>
      <ListGroup className="border-0 bg-primary-subtle p-0">
        {!monthDates ? (
          <p className="py-1 px-2 fs-4 text-warning">Brak danych</p>
        ) : (
          databaseMonthsDatesToString?.map(
            (monthDateToString: string, idx: number) => {
              return (
                <SettingsMonthsListItem
                  monthDateToString={monthDateToString}
                  monthDate={monthDates[idx]}
                  key={monthDateToString}
                />
              );
            }
          )
        )}
      </ListGroup>
    </>
  );
};

export default SettingsMonthsList;
