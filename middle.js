const eqArrays = (arrOne, arrTwo) => {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] === arrTwo[i]) {
      return true;
    }
  }
};

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


const middle = array => {
  let midOfArr = [];
  if (array.length < 3) {
    return midOfArr;
  } else if (array.length % 2 === 0) {
    const midIndexEven = Math.floor(array.length / 2);
    midOfArr.push(array[midIndexEven - 1], array[midIndexEven]);
  } else {
    const midIndexOdd = Math.floor(array.length / 2);
    midOfArr.push(array[midIndexOdd]);
  }
  return midOfArr;
};

assertArraysEqual((middle([1, 2, 3])), [2]);
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);
assertArraysEqual((middle([1, 2])), []);
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])), [5, 6]);
assertArraysEqual((middle(['a', 'b', 1, 2, 3])), [1]);