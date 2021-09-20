const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
// assertArraysEqual(map(words, word => "dog"), ["dog", "dog", "dog", "dog", "dog"]);
// assertArraysEqual(map(words, word => typeof word), ["string", "string", "string", "string", "string"]);