import { ImArrowLeft } from "react-icons/im";
import { Link } from "react-router-dom";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../../../utils/utilsCapitalizeFirstLetter";
import useMonthDates from "../../../../hooks/useMonthDates";
import "./_monthTitle.scss"

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
    <div className="_monthTitle">
      <Link
        to={`/${listMonths?.[props.idx]}`}
        className="text-decoration-none _fs-responsive text-dark fw-medium"
      >
        <ImArrowLeft className="fs-6 me-1 text-primary" />
        {title}
      </Link>
    </div>
  );
};

export default MonthTitle;