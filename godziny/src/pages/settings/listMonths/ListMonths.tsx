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
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const [openCollapseIndex, setOpenCollapseIndex] = useState<number | null>(
    null
  );
  const [isOpenCollapse, setCollapseOpen] = useState(false);
  const [monthDate, setMonthDate] = useState("");

  const handleTogle = (monthDate: string, idx: number) => {
    setMonthDate(monthDate);
    setOpenCollapseIndex(idx);
    listMonths &&
      monthDate === listMonths[idx] &&
      setCollapseOpen(prev => !prev);
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
                monthDateToString={monthDateToString}
                monthDate={monthDate}
                isOpen={idx === openCollapseIndex}
                setOpenCollapseIndex={setOpenCollapseIndex}
                isOpenCollapse={isOpenCollapse}
                onToggle={() => listMonths && handleTogle(listMonths[idx], idx)}
                idx={idx}
                setMonthDate={setMonthDate}
              >
                <FormHoursContext monthDate={listMonths && listMonths[idx]} />
              </CollapseFormHours>
            </ListGroup.Item>
          );
        }
      )}
    </>
  );
};

export default ListMonths;
