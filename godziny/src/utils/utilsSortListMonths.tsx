export const sortListMonths = (listMonths: string[]) => {
  return listMonths && [...listMonths]?.sort((a: string, b: string) => {
    const dateA = new Date(a).getTime();
    const dateB = new Date(b).getTime();

    return dateA - dateB;
  }).reverse()

};
