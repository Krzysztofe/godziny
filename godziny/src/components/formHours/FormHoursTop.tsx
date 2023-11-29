import InputsText from "../inputs/InputsText";

const FormHoursTop = () => {
  const dataInputsText = [
    { value: "allHours", type: "number", isErrorPrint: false },
  ];

  const styles = "fs-7 d-flex align-items-end";
  return (
    <div className="d-flex justify-content-between fw-medium ">
      <div className={styles}>0 h</div>

      <div className="col-3 col-sm-5 d-flex">
        <InputsText inputsData={dataInputsText} /> &nbsp;
        <div>h</div>
      </div>

      <div className={styles}>320 h</div>
    </div>
  );
};

export default FormHoursTop;
