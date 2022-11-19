export const capitalize = function (string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};
export const reverseString = function (string) {
  return string.split("").reverse().join("");
};
