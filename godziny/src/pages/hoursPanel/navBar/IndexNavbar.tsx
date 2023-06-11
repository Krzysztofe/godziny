import React, { useState } from "react";

const IndexNavbar = () => {
  const [year, setYear] = useState("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(year);
      
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginRight: 20 }}>
      <input
        type="month"
        value={year}
        onChange={handleDateChange}
        min="2023-06"
        max="2025-12"
      />
      <button type="submit"> add</button>
    </form>
  );
};

export default IndexNavbar;
