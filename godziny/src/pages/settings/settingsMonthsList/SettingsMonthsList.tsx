import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import useMonthDates from "../../../hooks/useMonthDates";
import { RootState } from "../../../redux/store";
import SettingsMonthsListItem from "./SettingsMonthsListItem";

const SettingsMonthsList = () => {
  const { sortedInfoMonths, databaseMonthsDatesToString } = useMonthDates();
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

// console.log("lst", listMonths);

  return (
    <>
      <h3 className="h6">Zapisane miesiące</h3>
      <ListGroup className="border-0 p-0">
        {!listMonths && <p className="py-1 px-2 text-warning">Brak danych</p>}

        {databaseMonthsDatesToString
          ?.map((monthDateToString: string, idx: number) => {
            return (
              <SettingsMonthsListItem
                monthDateToString={monthDateToString}
                monthDate={sortedInfoMonths[idx]}
                key={monthDateToString}
              />
            );
          })}
      </ListGroup>
    </>
  );
};

export default SettingsMonthsList;
