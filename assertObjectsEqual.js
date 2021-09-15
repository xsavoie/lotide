const eqArrays = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] === arrTwo[i]) {
      return true;
    }
  }
};

const eqObjects = function (objectOne, objectTwo) {
  const keyOne = Object.keys(objectOne);
  const keyTwo = Object.keys(objectTwo);
  if (keyOne.length !== keyTwo.length) {
    return false;
  }
  for (const key of keyOne) {
    if (Array.isArray(objectOne[key])) {
      if (eqArrays(objectOne[key], objectTwo[key]) === false) {
        return false;
      }
    } else if (objectOne[key] !== objectTwo[key]) {
      return false;
    }
  } return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === false) {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`💲️💲️💲️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: '1' });
assertObjectsEqual({ a: "1", b: "2", c: "3" }, { b: "2", a: '1' });
