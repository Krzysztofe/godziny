import { useSelector } from "react-redux";
import InputsText from "../../../../../components/inputs/inputsText/InputsText";
import { RootState } from "../../../../../redux/store";
import "./_formHoursTop.scss"

const FormHoursTop = () => {
  const { calcHours } = useSelector((state: RootState) => state.calcHours);

  const dataInputsText = [
    { value: "allHours", type: "number", isErrorPrint: false },
  ];

  const styles = "fs-4 d-flex align-items-end";
  return (
    <>
      {/* <InputsText inputsData={dataInputsText} /> */}
      <div className="_d-between fw-medium position-relative">
        <div className={styles}>
          0 h{" "}
          <div className="ms-4 ps-4 position-absolute">
            Zapisane: {calcHours?.allHours} h
          </div>
        </div>

        <div
          className="col-6 col-sm-5 d-flex _formHoursTop__input"
          // style={{ width: "62px" }}
        >
          <InputsText inputsData={dataInputsText} /> &nbsp;
          <div>h</div>
        </div>
        <div className={styles}>320 h</div>
      </div>
    </>
  );
};

export default FormHoursTop;
