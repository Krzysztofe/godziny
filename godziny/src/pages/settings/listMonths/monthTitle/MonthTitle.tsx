import { useContext } from "react";
import { Link } from "react-router-dom";
import { MonthItemContext } from "../ListMonths";
import IconArrowLeft from "./IconArrowLeft";
import "./_monthTitle.scss";

const MonthTitle = () => {
  const { monthLabel, year, month } = useContext(MonthItemContext);

  const monthLink = month < 10 ? "0" + month : month;


  return (
    <div className="_monthTitle _fs-primary">
      <Link
        to={`/${year}-${monthLink}`}
        className="text-decoration-none _fw-regular text-dark _align-center"
      >
        <IconArrowLeft />
        <div className="_text-noWrap">{monthLabel}</div>
      </Link>
    </div>
  );
};

export default MonthTitle;
