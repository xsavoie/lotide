// const assertArraysEqual = (arrOne, arrTwo) => {
//   for (let i = 0; i < arrOne.length; i++) {
//     for (let j = 0; j < arrOne.length; j++) {
//       if (arrOne[i][j] === arrTwo[i][j]) {
//         return true
//       }
//     }
//     }
// };  

// console.log(assertArraysEqual([1,2,3],  [1,2,3]));
// console.log(assertArraysEqual([1,2,3], [1,2,4]));

const assertArraysEqual = (arrOne, arrTwo) => {
  let results = false;
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] === arrTwo[i]) {
      results = true;
    } else {
      results = false;
    } 
  }  
  if (results === true){  console.log(`💲️💲️💲️ Assertion Passed: ${arrOne} === ${arrTwo}`)
    } else if (results === false) {
      console.log(`🛑️🛑️🛑️ Assertion Failed: ${arrOne} !== ${arrTwo}`)
    }
  }
  
assertArraysEqual([1,2,3],  [1,2,3]);
assertArraysEqual([1,2,3], [1,2,4]);