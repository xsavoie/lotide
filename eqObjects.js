const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💲️💲️💲️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(objectOne, objectTwo) {
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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false