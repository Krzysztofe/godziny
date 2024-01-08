import { useSelector } from "react-redux";
import InputsText from "../../../../components/inputs/inputsText/InputsText";
import { RootState } from "../../../../redux/store";

const FormHoursTop = () => {
  const { calcHours } = useSelector((state: RootState) => state.calcHours);

  const dataInputsText = [
    { value: "allHours", type: "number", isErrorPrint: false },
  ];

  console.log("", calcHours);

  const styles = "fs-7 d-flex align-items-end";
  return (
    <div className="d-flex justify-content-between fw-medium ">
      <div className={styles}>0 h</div>
      Zapisane: {calcHours?.allHours} h
      <div className="col-6 col-sm-5 d-flex" style={{ width: "62px" }}>
        <InputsText inputsData={dataInputsText} /> &nbsp;
        <div>h</div>
      </div>
      <div className={styles}>320 h</div>
    </div>
  );
};

export default FormHoursTop;
