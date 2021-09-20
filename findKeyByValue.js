const findKeyByValue = function(object, value) {
  const objKeys = Object.keys(object);
  for (let i = 0; i < objKeys.length; i++) {
    if (object[objKeys[i]] === value) {
      return objKeys[i];
    }
  }
};

module.exports = findKeyByValue;
