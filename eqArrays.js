const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💲️💲️💲️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arrOne, arrTwo) => {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] === arrTwo[i]) {
      return true
    }
  }
}  

assertEqual(eqArrays(eqArrays([1, 2, 3], [1, 2, 3])), true);
assertEqual(eqArrays(eqArrays([1, 2, 3], [3, 2, 1])), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false