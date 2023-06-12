import React, { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useAddDaysMutation } from "../../../services/apiSlice";
import { addedColumnsWithDays } from "../dayForm/dataDayForm";
import useDataBaseValues from "../useDataBaseValues";

const IndexSidebar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [addDays, success] = useAddDaysMutation();

  const {
    databaseColumnsId,
    databaseAllHours,
    dataCurrentHours,
    databaseAccepteddHours,
    databaseRejectedHours,
    acceptedHoursSum,
    rejectedHoursSum,
    dataBaseSubmitedHours,
    databaseColumns,
    submitedHoursSum,
    databaseMonth,
    data,
    databaseAllData,
  } = useDataBaseValues();

  var date = new Date();
  var currMounth = new Intl.DateTimeFormat("pl", {
    month: "long",
  }).format(date);

  var currYear = new Intl.DateTimeFormat("pl", {
    year: "numeric",
  }).format(date);

  var currMounthNum = new Intl.DateTimeFormat("pl", {
    month: "2-digit",
  }).format(date);

  const [year, setYear] = useState(`${currYear}-${currMounthNum}`);

  const databaseMounths = databaseAllData.map((month: any) => {
    return month.month;
  });

  const databaseMonthsToString = databaseMounths.map(month => {
    const monthToDateFormat = new Date(month);
    return new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthToDateFormat)
  });


  // useEffect(() => {
  //   navigate(`/miesiac/${databaseMonth}`);
  // }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const addMounth = { ...addedColumnsWithDays, month: year };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addDays(addMounth);
  };

  // console.log("", year);
  // console.log("gg", data);

  return (
    <div>
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

      {data === null
        ? null
        : databaseMonthsToString.map(month => {
            return <div key={month}>{month}</div>;
          })}
    </div>
  );
};

export default IndexSidebar;
