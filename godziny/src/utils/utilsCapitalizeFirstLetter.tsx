export const capitalizeFirstLetter = (inputString: string) => {
  return inputString
    .toLowerCase()
    .split(" ")
    .map(word => {
      return word?.charAt(0)?.toUpperCase() + word.slice(1);
    })
    .join(" ");
};
