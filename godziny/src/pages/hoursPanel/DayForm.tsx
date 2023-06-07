import { FormEvent, useState } from "react";
import TextInput from "../../components/inputs/TextInput";
import RadioInput from "../../components/inputs/RadioInput";
import { FaTrashAlt } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

const DayForm = () => {
  const [userData, setUserData] = useState({
    hours: "",
    userName: "",
    location: "",
  });

  const handleInputChange = () => {
    return;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    return;
  };

  const handleDeleteDay = async () => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
        {[
          { type: "date", name: "date", label: "Dzień" },
          { type: "number", name: "hours", label: "Godz" },
          { type: "text", name: "userName", label: "Imię" },
        ].map(({ type, name, label }) => {
          return (
            <TextInput
              key={name}
              type={type}
              name={name}
              value={userData[name as keyof typeof userData]}
              label={label}
              placeholder={label}
              handleChange={handleInputChange}
            />
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
      <button onClick={handleDeleteDay}>
        <FaTrashAlt />
      </button>
    </>
  );
};

export default DayForm;
