const without = (sourceArr, itemsToRemove) => {
  let purgedArray = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i] !== itemsToRemove.toString()) {
      purgedArray.push(sourceArr[i]);
    }
  }
  return purgedArray;
};

module.exports = without;

// assertArraysEqual(without([1,2,3], 1), [2,3]);
// const words = ["hello", "world", "lighthouse"];
// assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);