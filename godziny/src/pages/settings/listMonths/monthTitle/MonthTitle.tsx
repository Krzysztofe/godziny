import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useMonthDates from "../../../../hooks/useMonthDates";
import { RootState } from "../../../../redux/store";
import { capitalizeFirstLetter } from "../../../../utils/utilsCapitalizeFirstLetter";
import IconArrowLeft from "./IconArrowLeft";
import "./_monthTitle.scss";
import { useContext } from "react";
import { MonthItemContext } from "../ListMonths";

const MonthTitle = () => {
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { databaseMonthsDatesToString } = useMonthDates();
  const monthIdx = useContext(MonthItemContext);

  const title =
    databaseMonthsDatesToString &&
    capitalizeFirstLetter(databaseMonthsDatesToString[monthIdx]);

  return (
    <div className="_monthTitle _fs-primary">
      <Link
        to={`/${listMonths?.[monthIdx]}`}
        className="text-decoration-none _fw-regular text-dark _align-center"
      >
        <IconArrowLeft />
        <div className="_text-noWrap">{title}</div>
      </Link>
    </div>
  );
};

export default MonthTitle;
