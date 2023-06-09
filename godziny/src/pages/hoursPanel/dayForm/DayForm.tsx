import { FormEvent, useState } from "react";
import TextInput from "../../../components/inputs/TextInput";
import RadioInput from "../../../components/inputs/RadioInput";
import { FaTrashAlt } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import useDayForm from "./useDayForm";

interface FormValues {
  userName: string;
}

const DayForm = () => {
  const { formik } = useDayForm();

  return (
    <>
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

        <button type={"submit"}>
          <FcApproval />
        </button>
      </form>
    </>
  );
};

export default DayForm;
