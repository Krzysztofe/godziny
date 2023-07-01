const today = new Date();

export const currYearNumber = new Intl.DateTimeFormat("pl", {
  year: "numeric",
}).format(today);

export const currMonthNumber = new Intl.DateTimeFormat("pl", {
  month: "2-digit",
}).format(today);

export const currDateNumber = today.toISOString().split("T")[0]; 

export const currMonthDateToString = new Intl.DateTimeFormat("pl-PL", {
  year: "numeric",
  month: "long",
  timeZone: "UTC",
}).format(today);

