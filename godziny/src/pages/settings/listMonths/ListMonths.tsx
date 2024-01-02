import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import useMonthDates from "../../../hooks/useMonthDates";
import { dataStylesListGroupItem } from "../dataStylesSettingsLists";
import CollapseFormHours from "./CollapseFormHours";
import FormHoursContainer from "./formHours/FormHoursContainer";

const ListMonths = () => {
  const { databaseMonthsDatesToString } = useMonthDates();

  const [openCollapseIndex, setOpenCollapseIndex] = useState<number | null>(
    null
  );

  return (
    <>
      {databaseMonthsDatesToString?.map(
        (monthDateToString: string, idx: number) => {
          return (
            <ListGroup.Item
              key={monthDateToString}
              className={dataStylesListGroupItem}
            >
              <CollapseFormHours
                isOpen={idx === openCollapseIndex}
                setOpenCollapseIndex={setOpenCollapseIndex}
                idx={idx}
              >
                <FormHoursContainer idx={idx} />
              </CollapseFormHours>
            </ListGroup.Item>
          );
        }
      )}
    </>
  );
};

export default ListMonths;
