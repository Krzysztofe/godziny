import { useFormikContext } from "formik";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import useHTTPState from "../../../hooks/useHTTPState";
import { RootState } from "../../../redux/store";
import { useAddDayMutation } from "../../../services/apiSliceMonths";
import { ModelDay } from "../someData/dataSidebarMonthForm";
import useFormikDay from "./useFormikDay";

type Props = {
  success: any;
};

const FormDayButton = (props: Props) => {
  const { values } = useFormikContext<ModelDay>();
  const { btnContent } = useHTTPState(props.success, "Dodaj dzień");
  const { month } = useSelector((state: RootState) => state.monthsPanel);
  const currentHours = month?.calc?.currentHours;

  return (
    <>
      <Button
        type="submit"
        disabled={props.success.isLoading}
        className="fw-medium w-100 mt-2 bg-info text-white"
      >
        {btnContent}
      </Button>

      <div className="text-danger d-block mt-0 fs-8" style={{ height: "1rem" }}>
        {currentHours - +values.hours < 0 || currentHours === 0
          ? "Brak dostępnych godzin"
          : ""}
      </div>
    </>
  );
};

export default FormDayButton;
