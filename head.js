const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💲️💲️💲️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  let arrayHead = array[0];
  return arrayHead;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1,2,3,4,5]), 1);
assertEqual(head([1,2,3,4,5]), 2);
assertEqual(head([1]), 1);
assertEqual(head([]), 1);