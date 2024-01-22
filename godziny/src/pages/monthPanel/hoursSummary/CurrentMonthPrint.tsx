import useMonthURLToString from "../../../hooks/useMonthURLToString";
import { capitalizeFirstLetter } from "../../../utils/utilsCapitalizeFirstLetter";

const CurrentMonthPrint = () => {
  const { monthURLStringFormat } = useMonthURLToString();

  return (
    <div className="text-center fs-4 d-md-none">
      {capitalizeFirstLetter(monthURLStringFormat)}
    </div>
  );
};

export default CurrentMonthPrint;
