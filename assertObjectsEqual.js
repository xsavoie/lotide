const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === false) {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`💲️💲️💲️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: '1' });
// assertObjectsEqual({ a: "1", b: "2", c: "3" }, { b: "2", a: '1' });
