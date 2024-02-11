import useMonthURLToString from "../../../hooks/useMonthURLToString";
import { capitalizeFirstLetter } from "../../../utils/utilsCapitalizeFirstLetter";


const CurrentMonth = () => {
  const { monthURLStringFormat } = useMonthURLToString();

  return (
    <div
      className="text-center fs-4 d-md-none pt-1 pb-4 position-sticky z-3 bg-secondary _currentMonth"
      style={{ top: 48 }}
    >
      {capitalizeFirstLetter(monthURLStringFormat)}
    </div>
  );
};

export default CurrentMonth;
