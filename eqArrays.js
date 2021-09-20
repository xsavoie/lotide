const eqArrays = (arrOne, arrTwo) => {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true
}; 

module.exports = eqArrays;