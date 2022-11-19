const average = function (array) {
  return array.reduce((prev, act) => (prev += act), 0) / array.length;
};

const min = function (array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
};

const max = function (array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

export const analyzeArray = function (array) {
  return {
    average: average(array),
    min: min(array),
    max: max(array),
    length: array.length,
  };
};
