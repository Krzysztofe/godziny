import CounterHeader from "../counterHeader/CounterHeader";
import useDataCoumnsHeader from "./useDataCoumnsHeader";
import "./_columnsHeader.scss";

const ColumnsHeader = () => {
  const { dataColumnsHeader } = useDataCoumnsHeader();

  return (
    <div className="_d-between _columnsHeader">
      {dataColumnsHeader.map(({ headerText, counter }) => {
        return (
          <div
            key={headerText}
            className={`text-primary _d-center _fw-semiBold p-1 _columnsHeader__item bg-secondary-light  border border-bottom-0            
            `}
          >
            {headerText}
            <CounterHeader counter={counter} text={headerText} />
          </div>
        );
      })}
    </div>
  );
};

export default ColumnsHeader;
