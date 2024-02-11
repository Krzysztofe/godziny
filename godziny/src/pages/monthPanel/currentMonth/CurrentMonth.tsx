import useMonthURLToString from "../../../hooks/useMonthURLToString";
import { capitalizeFirstLetter } from "../../../utils/utilsCapitalizeFirstLetter";
import "./_currentMonth.scss";

const CurrentMonth = () => {
  const { monthURLStringFormat } = useMonthURLToString();

  return (
    <div className="text-center fs-4 d-md-none pt-1 pb-4 z-3 bg-secondary _currentMonth">
      {capitalizeFirstLetter(monthURLStringFormat)}
    </div>
  );
};

export default CurrentMonth;
