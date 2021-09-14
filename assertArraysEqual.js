const assertArraysEqual = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length){ 
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${arrOne} !== ${arrTwo}`)
    return;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      console.log(`🛑️🛑️🛑️ Assertion Failed: ${arrOne} !== ${arrTwo}`);
      return;
    }
  } 
  console.log(`💲️💲️💲️ Assertion Passed: ${arrOne} === ${arrTwo}`)
}

assertArraysEqual([1,2,3],  [1,2,3]);
assertArraysEqual([1,2,3], [1,2,4]);
assertArraysEqual([1, 2, 3], [1, 3, 3])
assertArraysEqual([1,2,3], [1,2,3,4])