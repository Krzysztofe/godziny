const today = new Date();

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const futureDateInNext_14_Days = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
const futureDateInNext_60_Days = new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000);

export const currYearDigits = today.getFullYear();
export const currMonthDigits = String(today.getMonth() + 1).padStart(2, "0");
export const currDayDigits = String(today.getDate()).padStart(2, "0");
export const currDateDigits = formatDate(today);

export const dateInNext_14_Days = formatDate(futureDateInNext_14_Days);
export const dateInNext_60_Days = formatDate(futureDateInNext_60_Days);



export const currMonthDateToString = new Intl.DateTimeFormat("pl-PL", {
  year: "numeric",
  month: "long",
  timeZone: "UTC",
}).format(today);
