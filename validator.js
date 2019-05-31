const checkMinMax = (min, max) => {
  if (min > max){
    throw new Error('The start of the range cannot be greater than the end of the range');
  }

  if (min < 0 || max < 0){
    throw new Error('Both limits of the range must be defined within the non-negative integers');
  }
};

module.exports = {
  checkMinMax
};
