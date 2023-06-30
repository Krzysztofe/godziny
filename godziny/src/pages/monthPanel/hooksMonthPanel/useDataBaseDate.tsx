

const useDatabaseDate = () => {
    

  const date = new Date();

  const currYearNum = new Intl.DateTimeFormat("pl", {
    year: "numeric",
  }).format(date);

  const currMonthNum = new Intl.DateTimeFormat("pl", {
    month: "2-digit",
  }).format(date);

    
    return { currYearNum, currMonthNum };
};

export default useDatabaseDate;