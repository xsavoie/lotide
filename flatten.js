const flatten = (arrToFlat) => {
  let flattenedArr = [];
  for (let i = 0; i < arrToFlat.length; i++) {
    if (Array.isArray(arrToFlat[i])) {
      for (let j = 0; j < arrToFlat[i].length; j++) {
        flattenedArr.push(arrToFlat[i][j]);
      }
    } else {
      flattenedArr.push(arrToFlat[i]);
    }
  }
  return flattenedArr;
};

module.exports = flatten;
