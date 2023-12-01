const getHoursFromColumn = (days: any) => {
  return days?.reduce((acu: any, day: any) => {
    const dayHours = day?.hours || 0;
    return acu + dayHours;
  }, 0);
};


const getHoursFromColumns = (columns: any) => {
  const submittedHours = getHoursFromColumn(columns[0]?.days);
  const acceptedHours = getHoursFromColumn(columns[1]?.days);
  const rejectedHours = getHoursFromColumn(columns[2]?.days);

  return { submittedHours, acceptedHours, rejectedHours };
};

export default getHoursFromColumns;
