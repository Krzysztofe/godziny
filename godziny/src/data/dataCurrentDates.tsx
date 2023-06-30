const date = new Date();

export const currYearNumber = new Intl.DateTimeFormat("pl", {
  year: "numeric",
}).format(date);

export const currMonthNumber = new Intl.DateTimeFormat("pl", {
  month: "2-digit",
}).format(date);

export const currMonthDateToString = new Intl.DateTimeFormat("pl-PL", {
  year: "numeric",
  month: "long",
  timeZone: "UTC",
}).format(date);
