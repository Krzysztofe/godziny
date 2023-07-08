

const useMonthDates = (data: any) => {
  const monthDates =
    data &&
    Object.values(data as { [key: string]: unknown })
      .flatMap(
        year => data && Object.values(year as { [key: string]: unknown })
      )
      .map(year => year.id);
  return { monthDates };
};

export default useMonthDates;
