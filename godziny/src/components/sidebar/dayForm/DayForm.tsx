import { FcApproval } from "react-icons/fc";
import RadioInput from "../../inputs/RadioInput";
import TextInput from "../../inputs/TextInput";
import useDayForm from "./useDayForm";
import { useParams, useLocation } from "react-router-dom";
import useDataBaseValues from "../../../pages/monthPanel/useDataBaseValues";
import {Spinner } from "react-bootstrap"

const DayForm = () => {
  const { monthURL } = useParams();
  const { formik, success } = useDayForm();
  const urlParts = useLocation().pathname.split("/");
  const lastPartMonthURL = urlParts[urlParts.length - 1];

  const { dataCurrentHours, databaseAllHours } =
    useDataBaseValues(lastPartMonthURL);



  let errorHoursContent = <div></div>;

  if (dataCurrentHours - +formik.values.hours < 0) {
    errorHoursContent = <div>Brak tylu godzin do wykorzystania</div>;
  }

  if (databaseAllHours === 0) {
    errorHoursContent = <div> Podaj liczbę godzin w miesiącu</div>;
  }

  let btnContent = <FcApproval />;

  if (success.isLoading) {
    btnContent = (
      <Spinner animation="border" size="sm" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (success.isError) {
    btnContent = <div> "Błąd" </div>;
  }

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginTop: 20 }}>
      {[
        { type: "text", value: "userName", label: "Imię" },
        { type: "date", value: "date", label: "Dzień" },
        { type: "number", value: "hours", label: "Godz." },
      ].map(({ type, value, label }) => {
        return (
          <div key={value}>
            <TextInput
              type={type}
              name={value}
              value={formik.values[value as keyof typeof formik.values]}
              label={label}
              placeholder={label}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
            <div style={{ color: "red" }}>
              {formik.touched[value as keyof typeof formik.values] &&
                formik.errors[value as keyof typeof formik.values] && (
                  <small>
                    {formik.errors[value as keyof typeof formik.values]}
                  </small>
                )}
            </div>
          </div>
        );
      })}

      {["Wewnątrz", "Poza"].map(place => {
        return (
          <RadioInput
            key={place}
            value={place}
            name={"place"}
            handleChange={formik.handleChange}
            checked={formik.values.place === place}
          />
        );
      })}
      <div style={{ color: "red" }}>
        {formik.touched.place && formik.errors.place && (
          <small>{formik.errors.place}</small>
        )}
      </div>

      {errorHoursContent}
      <button type="submit">{btnContent}</button>
    </form>
  );
};

export default DayForm;
