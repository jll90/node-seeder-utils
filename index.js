const { checkMinMax } = require('./validator');

const getRandomNumber = (min, max) => {
  checkMinMax(min, max);
  return Math.random() * (max - min) + min;
};

const getRandomInt = (min, max) => {
  checkMinMax(min, max);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRange = (min, max) => {
  checkMinMax(min, max);
  return [...Array(max - min + 1).keys()].map(e => e + min);
};

const takeRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = {
  Random: {
    take: takeRandom,
    int: getRandomInt,
    number: getRandomNumber
  },
  Range: {
    build: generateRange
  }
};

