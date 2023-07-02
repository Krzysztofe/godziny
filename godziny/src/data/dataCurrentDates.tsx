const today = new Date();

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const futureDateIn14Days = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
const futureDateIn60Days = new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000);

export const currYearDigits = today.getFullYear();
export const currMonthDigits = String(today.getMonth() + 1).padStart(2, "0");
export const currDayDigits = String(today.getDate()).padStart(2, "0");
export const currDateDigits = formatDate(today);

export const dateIn14Days = formatDate(futureDateIn14Days);
export const dateIn60Days = formatDate(futureDateIn60Days);



export const currMonthDateToString = new Intl.DateTimeFormat("pl-PL", {
  year: "numeric",
  month: "long",
  timeZone: "UTC",
}).format(today);
