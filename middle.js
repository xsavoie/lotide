const middle = array => {
  let midOfArr = [];
  if (array.length < 3) {
    return midOfArr;
  } else if (array.length % 2 === 0) {
    const midIndexEven = Math.floor(array.length / 2);
    midOfArr.push(array[midIndexEven - 1], array[midIndexEven]);
  } else {
    const midIndexOdd = Math.floor(array.length / 2);
    midOfArr.push(array[midIndexOdd]);
  }
  return midOfArr;
};

module.exports = middle;