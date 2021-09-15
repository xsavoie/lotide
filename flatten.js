const assertArraysEqual = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${arrOne} !== ${arrTwo}`);
    return;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      console.log(`🛑️🛑️🛑️ Assertion Failed: ${arrOne} !== ${arrTwo}`);
      return;
    }
  }
  console.log(`💲️💲️💲️ Assertion Passed: ${arrOne} === ${arrTwo}`);
};

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


