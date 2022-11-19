const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const caesarCypher = function (string, shift = 1) {
  let res = "";
  for (let i = 0; i < string.length; i++) {
    if (!alphabet.includes(string[i].toLowerCase())) {
      res += string[i];
    } else {
      let index = alphabet.indexOf(string[i].toLowerCase());
      res += alphabet.charAt((index + shift) % alphabet.length);
    }
  }
  return res;
};
