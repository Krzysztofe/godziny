import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAddDaysMutation } from "../../../services/apiSlice";
import { addedColumnsWithDays } from "../dayForm/dataDayForm";
import useDataBaseValues from "../useDataBaseValues";

const IndexSidebar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [addDays, success] = useAddDaysMutation();

  const { data, databaseMonthsCollection } = useDataBaseValues();

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

  const databaseMonthValues = databaseMonthsCollection.map((month: any) => {
    return month.month;
  });

  const databaseMonthsToString = databaseMonthValues.map((monthValue: any) => {
    const monthToDateFormat = new Date(monthValue);
    return new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthToDateFormat);
  });

  // useEffect(() => {
  //   navigate(`/miesiac/${year}`);
  // }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const addMounth = { ...addedColumnsWithDays, month: year };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addDays(addMounth);
  };

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
        : databaseMonthsToString.map((month: any, idx: any) => {
            return (
              <div key={month}>
                <Link to={`/miesiac/${databaseMonthValues[idx]}`} key={month}>
                  {month}
                </Link>
              </div>
            );
          })}
    </div>
  );
};

export default IndexSidebar;
