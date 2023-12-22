import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import useHTTPState from "../../../hooks/useHTTPState";
import useMonthDates from "../../../hooks/useMonthDates";
import { RootState } from "../../../redux/store";
import {
  agreeAlert,
  closeAlert,
  printAlert,
} from "../../../redux/storeFeatures/alertSlice";
import {
  useDeleteMonthMutation,
  // useUpdateListMonthsMutation,
} from "../../../services/apiSliceMonths";
import {
  dataStylesButton,
  dataStylesListGroupItem,
} from "../dataStylesSettingsLists";
import CollapseContainer from "../../../components/CollapseContainer";
import FormHoursContext from "../../../components/formHours/FormHoursContext";
import CollapseInMonth from "./CollapseInMonth";
import { ImArrowLeft } from "react-icons/im";
import ListMonthsTitle from "./MonthTitle";
import DeleteButton from "./DeleteButton";

const ListMonths = () => {
  const dispatch = useDispatch();
  const { databaseMonthsDatesToString } = useMonthDates();
  const [deleteMonth, success] = useDeleteMonthMutation();
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
  );
  // const [updateListMonths, successInfo] = useUpdateListMonthsMutation();
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { agree } = useSelector((state: RootState) => state.alert);
  const [openCollapseIndex, setOpenCollapseIndex] = useState<number | null>(
    null
  );

  const [isOpenCollapse, setCollapseOpen] = useState(false);

  const [monthDate, setMonthDate] = useState("");

  const handleAlert = (monthDate: string, idx: number) => {
    dispatch(printAlert("Usunąć miesiąc?"));
    setMonthDate(monthDate);
  };

  const handleTogle = (monthDate: string, idx: number) => {
    setMonthDate(monthDate);
    setOpenCollapseIndex(idx);
    listMonths &&
      monthDate === listMonths[idx] &&
      setCollapseOpen(prev => !prev);
  };

  const deleteMonthAsync = async () => {
    if (agree && monthDate && listMonths?.includes(monthDate)) {
      const year = monthDate.slice(0, 4);
      const month = monthDate.slice(-2);
      await deleteMonth({ year: year, month: month });
    }
  };

  useEffect(() => {
    deleteMonthAsync();
    dispatch(agreeAlert(false));
    dispatch(closeAlert());
  }, [agree]);

  return (
    <>
      {databaseMonthsDatesToString?.map(
        (monthDateToString: string, idx: number) => {
          return (
            <ListGroup.Item
              key={monthDateToString}
              className={dataStylesListGroupItem}
            >
              <div>
                <CollapseInMonth
                  monthDateToString={monthDateToString}
                  monthDate={listMonths && listMonths[idx]}
                  isOpen={idx === openCollapseIndex}
                  setOpenCollapseIndex={setOpenCollapseIndex}
                  isOpenCollapse={isOpenCollapse}
                  onToggle={() =>
                    listMonths && handleTogle(listMonths[idx], idx)
                  }
                  idx={idx}
                  setMonthDate={setMonthDate}
                >
                  <FormHoursContext monthDate={listMonths && listMonths[idx]} />
                </CollapseInMonth>
              </div>
            </ListGroup.Item>
          );
        }
      )}
    </>
  );
};

export default ListMonths;
