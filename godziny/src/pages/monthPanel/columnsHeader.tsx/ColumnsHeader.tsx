import Counter from "../counter/Counter";
import useDataCoumnsHeader from "./useDataCoumnsHeader";

interface Props {
  thumbPosition: number;
}

const ColumnsHeader = (props: Props) => {
  const { dataColumnsHeader } = useDataCoumnsHeader();

  return (
    <div className="d-between sticky-top">
      {dataColumnsHeader.map(({ headerText, counter }) => {
        return (
          <div
            key={headerText}
            className={`text-dark-emphasis fs-responsive bg-white fw-medium p-1 d-flex align-items-center  ${
              props.thumbPosition === 0
                ? "border-bottom border-3 border-white"
                : "border-bottom border-3"
            }`}
            style={{ height: "35px", width: "33%" }}
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
