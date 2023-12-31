import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import FormHoursContext from "./formHours/FormHoursContext";
import useMonthDates from "../../../hooks/useMonthDates";
import { RootState } from "../../../redux/store";
import { dataStylesListGroupItem } from "../dataStylesSettingsLists";
import CollapseFormHours from "./CollapseFormHours";

const ListMonths = () => {
  const { databaseMonthsDatesToString } = useMonthDates();
 
  const [openCollapseIndex, setOpenCollapseIndex] = useState<number | null>(
    null
  );

  const handleTogle = (idx: number) => {
    setOpenCollapseIndex(idx);
  };

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
                handleTogle={() => handleTogle(idx)}
                idx={idx}
              >
                <FormHoursContext idx={idx} />
              </CollapseFormHours>
            </ListGroup.Item>
          );
        }
      )}
    </>
  );
};

export default ListMonths;
