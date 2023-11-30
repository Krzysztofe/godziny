import HoursSummary from "../../../components/HoursSummary";
import MonthPanelColumns from "../monthPanelColmns/MonthPanelColumns";

const MonthPanelContent = () => {
  return (
    <div
      className="py-1"
      style={{
        maxWidth: "1000px",
        width: "100%",
      }}
    >
      <HoursSummary />
      <MonthPanelColumns />
    </div>
  );
};

export default MonthPanelContent;
