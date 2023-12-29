import InputsText from "../../../../components/inputs/InputsText";
import { ModelCalcHours } from "../../../../sharedModels/modelCalcHours";
import { Spinner } from "react-bootstrap";

type Props = {
  calcHours?: ModelCalcHours;
  isLoading: boolean;
};

const FormHoursTop = (props: Props) => {
  const dataInputsText = [
    { value: "allHours", type: "number", isErrorPrint: false },
  ];

  let printAllours;

  if (props.isLoading) {
    printAllours = (
      <Spinner animation="border" size="sm" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    printAllours = props?.calcHours?.allHours;
  }

  const styles = "fs-7 d-flex align-items-end";
  return (
    <div className="d-flex justify-content-between fw-medium ">
      <div className={styles}>0 h</div>
      Zapisane: {printAllours} h
      <div className="col-6 col-sm-5 d-flex" style={{ width: "62px" }}>
        <InputsText inputsData={dataInputsText} /> &nbsp;
        <div>h</div>
      </div>
      <div className={styles}>320 h</div>
    </div>
  );
};

export default FormHoursTop;
