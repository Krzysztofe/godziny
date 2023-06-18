import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const MonthsList = () => {
  return (
    <>
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

      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default MonthsList;
