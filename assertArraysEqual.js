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

module.exports = assertArraysEqual;