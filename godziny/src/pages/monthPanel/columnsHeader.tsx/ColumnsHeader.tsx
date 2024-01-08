import Counter from "../counter/Counter";
import useDataCoumnsHeader from "./useDataCoumnsHeader";
import "./_columnsHeader.scss";

interface Props {
  thumbPosition: number;
}

const ColumnsHeader = (props: Props) => {
  const { dataColumnsHeader } = useDataCoumnsHeader();

  return (
    <div className="_d-between sticky-top">
      {dataColumnsHeader.map(({ headerText, counter }) => {
        return (
          <div
            key={headerText}
            className={`text-dark-emphasis _fs-responsive bg-white fw-medium p-1 d-flex align-items-center _columnsHeader  ${
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
