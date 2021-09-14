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

const without = (sourceArr, itemsToRemove) => {
  let purgedArray = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i] !== itemsToRemove.toString()) {
      purgedArray.push(sourceArr[i]);
    }
  }
  return purgedArray;
};

assertArraysEqual(without([1,2,3], 1), [2,3]);
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);