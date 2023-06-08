import { FormEvent, useState } from "react";
import TextInput from "../../../components/inputs/TextInput";
import RadioInput from "../../../components/inputs/RadioInput";
import { FaTrashAlt } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import useDayForm from "./useDayForm";

interface Props {
  dayId: any;
}

const DayForm = (props: Props) => {
  const { formik } = useDayForm(props.dayId);

  const [userData, setUserData] = useState({
    hours: "",
    userName: "",
    location: "",
  });

  const handleInputChange = () => {
    return;
  };

  // console.log("", props.dayId);

  const handleSubmit = (value: string) => (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <>
      <form onSubmit={handleSubmit(props.dayId)}>
        {[
          { type: "date", value: "date", label: "Dzień" },
          { type: "number", value: "hours", label: "Godz" },
          { type: "text", value: "userName", label: "Imię" },
        ].map(({ type, value, label }) => {
          return (
            <div key={crypto.randomUUID()}>
              <TextInput
                type={type}
                name={value}
                value={formik.values[value as keyof typeof formik.values]}
                label={label}
                placeholder={label}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
              <div className="loginForm__error" style={{ color: "red" }}>
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

        {["Wewnątrz", "Poza"].map(location => {
          return (
            <RadioInput
              key={location}
              value={location}
              name={"location"}
              handleChange={handleInputChange}
              checked={userData.location === location}
            />
          );
        })}
        <button>
          <FcApproval />
        </button>
      </form>
    </>
  );
};

export default DayForm;
