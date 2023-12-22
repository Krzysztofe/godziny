import InputsText from "../inputs/InputsText";
import { ModelCalcHours } from "../../sharedModels/modelCalcHours";

type Props = {
  calcHours?: ModelCalcHours;
};

const FormHoursTop = (props: Props) => {
  const dataInputsText = [
    { value: "allHours", type: "number", isErrorPrint: false },
  ];

  const styles = "fs-7 d-flex align-items-end";
  return (
    <div className="d-flex justify-content-between fw-medium ">
      <div className={styles}>0 h</div>
      Zapisane: {props?.calcHours?.allHours} h
      <div className="col-6 col-sm-5 d-flex" style={{ width: "62px" }}>
        <InputsText inputsData={dataInputsText} /> &nbsp;
        <div>h</div>
      </div>
      <div className={styles}>320 h</div>
    </div>
  );
};

export default FormHoursTop;
