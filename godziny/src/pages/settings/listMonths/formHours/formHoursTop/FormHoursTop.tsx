import { useSelector } from "react-redux";
import InputsText from "../../../../../components/inputs/inputsText/InputsText";
import { RootState } from "../../../../../redux/store";
import "./_formHoursTop.scss";

const FormHoursTop = () => {
  const { calcHours } = useSelector((state: RootState) => state.calcHours);

  const dataInputsText = [
    {
      value: "allHours",
      type: "number",
      isErrorPrint: false,
      styles: "ps-1 pt-0 pb-0 pl-0 fs-4 mt-0 _fw-semiBold",
    },
  ];


  return (
    <>
      <div className="_d-between align-items-center fs-4 mb-3 position-relative">
        <div className="">0 h </div>
        <div className="_formHoursTop__summary">
          Zapisane: {calcHours?.allHours} h
        </div>
        <div className="d-flex align-items-center ms-sm-4 _formHoursTop__input">
          <InputsText inputsData={dataInputsText} /> &nbsp;
          <div className="align-self-center mt-2">h</div>
        </div>
        <div>320 h</div>
      </div>
    </>
  );
};

export default FormHoursTop;
