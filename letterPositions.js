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
