import React, { useState } from "react";
import { monthPattern } from "./dataMonthForm";
import { useAddMonthMutation } from "../../../services/apiSlice";
import { FcApproval } from "react-icons/fc";

const MonthForm = () => {
  const [addMonth, success] = useAddMonthMutation();

  const date = new Date();

  const currYearNum = new Intl.DateTimeFormat("pl", {
    year: "numeric",
  }).format(date);

  const currMonthNum = new Intl.DateTimeFormat("pl", {
    month: "2-digit",
  }).format(date);

  const [year, setYear] = useState(`${currYearNum}-${currMonthNum}`);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const monthToPOST = { ...monthPattern, month: year };
    await addMonth(monthToPOST);
  };

let btnContent = <FcApproval />;

if (success.isLoading) {
  btnContent = <div> "Loading" </div>;
}

if (success.isError) {
  btnContent = <div> "Błąd" </div>;
}


  return (
    <form onSubmit={handleSubmit} style={{ marginRight: 20 }}>
      <input
        type="month"
        value={year}
        onChange={handleDateChange}
        min="2023-06"
        max="2025-12"
      />
      <button type="submit">{btnContent}</button>
    </form>
  );
};

export default MonthForm;
