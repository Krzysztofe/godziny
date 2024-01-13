import useMonthURLToString from "../../hooks/useMonthURLToString";

const CurrentMonth = () => {
  const { monthURLStringFormat } = useMonthURLToString();
  const monthStringCapitalize =
    monthURLStringFormat[0]?.toUpperCase() + monthURLStringFormat.slice(1);

  return (
    <div className="text-center fs-4 d-md-none">{monthStringCapitalize}</div>
  );
};

export default CurrentMonth;
