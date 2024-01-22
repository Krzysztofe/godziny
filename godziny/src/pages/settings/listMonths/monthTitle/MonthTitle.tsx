import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useMonthDates from "../../../../hooks/useMonthDates";
import { RootState } from "../../../../redux/store";
import { capitalizeFirstLetter } from "../../../../utils/utilsCapitalizeFirstLetter";
import IconArrowLeft from "./IconArrowLeft";
import "./_monthTitle.scss";


type Props = {
  idx: number;
};

const MonthTitle = (props: Props) => {
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { databaseMonthsDatesToString } = useMonthDates();

  const title =
    databaseMonthsDatesToString &&
    capitalizeFirstLetter(databaseMonthsDatesToString[props.idx]);

  return (
    <div className="_monthTitle _fs-primary">
      <Link
        to={`/${listMonths?.[props.idx]}`}
        className="text-decoration-none _fw-regular text-dark _align-center"
      >
        <IconArrowLeft />
        <div className="_text-noWrap">{title}</div>
      </Link>
    </div>
  );
};

export default MonthTitle;
