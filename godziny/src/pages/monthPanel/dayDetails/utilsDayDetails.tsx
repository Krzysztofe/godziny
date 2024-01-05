export const dateShort = (propsDate: string) => {
  const date = new Date(propsDate);
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "short",
  }).format(date);

};


