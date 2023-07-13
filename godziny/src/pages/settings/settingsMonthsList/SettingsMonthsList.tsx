import ListGroup from "react-bootstrap/ListGroup";
import useMonthDates from "../../../hooks/useMonthDates";
import SettingsMonthsListItem from "./SettingsMonthsListItem";



const SettingsMonthsList = () => {

const { monthDates } = useMonthDates();


const databaseMonthsDatesToString = monthDates?.map((monthDate: string) => {
  const monthToDateFormat = new Date(monthDate);
  return new Intl.DateTimeFormat("pl-PL", {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(monthToDateFormat);
});


    return (
      <>
        <h3 className="h4">Lista miesięcy</h3>
        <ListGroup className="border border-primary bg-white pe-0">
          {!monthDates ? (
            <p className="py-1 px-2 fs-4 text-warning">Brak danych</p>
          ) : (
            databaseMonthsDatesToString?.map((monthDateToString: string, idx:number) => {
              return (
                <SettingsMonthsListItem
                  monthDateToString={monthDateToString}
                  monthDate={monthDates[idx]}
                  key={monthDateToString}
                />
              );
            })
          )}
        </ListGroup>
      </>
    );
};

export default SettingsMonthsList;