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
            className={`text-primary _d-center _fs-2 _fw-semiBold p-1 _columnsHeader__item bg-secondary  ${
              props.thumbPosition === 0
                ? "border-bottom border-3 border-white"
                : "border-bottom border-3"
            }`}
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
