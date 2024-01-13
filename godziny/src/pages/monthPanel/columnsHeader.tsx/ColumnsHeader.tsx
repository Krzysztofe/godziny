import Counter from "../counter/Counter";
import useDataCoumnsHeader from "./useDataCoumnsHeader";
import "./_columnsHeader.scss";

interface Props {
  thumbPosition: number;
}

const ColumnsHeader = (props: Props) => {
  const { dataColumnsHeader } = useDataCoumnsHeader();

  return (
    <div className="_d-between _columnsHeader">
      {dataColumnsHeader.map(({ headerText, counter }) => {
        return (
          <div
            key={headerText}
            className={`text-primary _d-center _fw-semiBold p-1 _columnsHeader__item bg-secondary  border border-bottom-0
        
            
            `}
          >
            {headerText}

            <Counter counter={counter} text={headerText} />
          </div>
        );
      })}
    </div>
  );
};

export default ColumnsHeader;
//  ${
//             props.thumbPosition === 0
//               ? "border-bottom border-3 border-white"
//               : "border-bottom border-3"
//           }
