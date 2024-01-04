import Counter from "../counter/Counter";
import useDataCoumnsHeader from "./useDataCoumnsHeader";

interface Props {
  thumbPosition: number;
}

const ColumnsHeader = (props: Props) => {
  const { dataColumnsHeader } = useDataCoumnsHeader();

  return (
    <>
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
            {counter ? (
              <Counter counter={counter} text={headerText} />
            ) : (
              <Counter counter={0} text={headerText} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default ColumnsHeader;
