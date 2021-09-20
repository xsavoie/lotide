const countLetters = function(string) {
  const lowerString = string.toLowerCase().replace(/\s/g, "");
  let results = {};
  for (const letter of lowerString) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;

// console.log(countLetters("TEST"));
// console.log(countLetters("xaVIer"));
// console.log(countLetters("hello how are you"));
// console.log(countLetters("this is full of spaces to test out"));
// console.log(countLetters("asdawdasfasdgfasdgsdfasdf"));