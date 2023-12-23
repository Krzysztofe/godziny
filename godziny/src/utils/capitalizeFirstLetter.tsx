export const capitalizeFirstLetter = (inputString: string) => {
  return inputString
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
