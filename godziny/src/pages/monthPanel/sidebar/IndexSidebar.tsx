import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useAddMonthMutation,
  useColumnsQuery,
} from "../../../services/apiSlice";
import { monthPattern } from "../dayForm/dataDayForm";
import useDataBaseValues from "../hooksMonthPanel/useDataBaseValues";
import useDataBaseDate from "../hooksMonthPanel/useDataBaseDate";
import DayForm from "../dayForm/DayForm";

const IndexSidebar = () => {
  const navigate = useNavigate();
  const { monthValue } = useParams();
  const [addMonth, success] = useAddMonthMutation();
  const { data } = useColumnsQuery(undefined);
  const { databaseMonthsCollection } = useDataBaseValues(monthValue);
  // const { currYearNum, currMonthNum } = useDataBaseDate();

  const date = new Date();

  const currYearNum = new Intl.DateTimeFormat("pl", {
    year: "numeric",
  }).format(date);

  const currMonthNum = new Intl.DateTimeFormat("pl", {
    month: "2-digit",
  }).format(date);

  const [year, setYear] = useState(`${currYearNum}-${currMonthNum}`);

  const databaseMonthsDates =
    data && databaseMonthsCollection
      ? databaseMonthsCollection.map(month => month.month)
      : [];

  const databaseMonthsDatesToString =
    databaseMonthsDates &&
    databaseMonthsDates?.map((monthDate: any) => {
      const monthToDateFormat = databaseMonthsDates && new Date(monthDate);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const monthToPOST = { ...monthPattern, month: year };
    await addMonth(monthToPOST);
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
        : databaseMonthsDatesToString.map((month: any, idx: any) => {
            return (
              <div key={month}>
                <Link to={`/miesiac/${databaseMonthsDates[idx]}`} key={month}>
                  {month}
                </Link>
              </div>
            );
          })}
      <DayForm />
    </div>
  );
};

export default IndexSidebar;
