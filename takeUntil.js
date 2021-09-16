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

const takeUntil = function(array, callback) {
  let result = [];
  for (const element of array) {
    if (callback(element)) {
      return result;
    } else if (!callback(element)) {
      result.push(element);
    }
  }
  return result;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);