import { ImArrowLeft } from "react-icons/im";
import { Link } from "react-router-dom";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../../../utils/utilsCapitalizeFirstLetter";
import useMonthDates from "../../../../hooks/useMonthDates";
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
        <ImArrowLeft className=" text-light-emphasis me-1" />
        <div className="_text-noWrap">{title}</div>
      </Link>
    </div>
  );
};

export default MonthTitle;
