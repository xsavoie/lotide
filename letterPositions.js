const letterPositions = function(sentence) {
  const results = {};
  let lowerSentence = sentence.toLowerCase() //.replace(/\s/g, "");
  for (let i = 0; i < lowerSentence.length; i++) {
    if (lowerSentence[i] !== " ") {
    if (!results[lowerSentence[i]]) {
      results[lowerSentence[i]] = [];
    }
    results[lowerSentence[i]].push(i);
  }
}
  return results;
};

module.exports = letterPositions;

// console.log(letterPositions("xavier"));
// console.log(letterPositions("This is a test"));
// console.log(letterPositions("a lot of spaces to test out how this works"));
// console.log(letterPositions("LoWeRCaSe aND UppErCaSE StuFF"));

// assertArraysEqual(letterPositions("hello").e, [1]);