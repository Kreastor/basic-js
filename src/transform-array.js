const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let returnArr = [];
  console.log(arr);
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  };
  if (arr.length === 0) return [];

  if (arr.includes('--double-next') === false ||
      arr.includes('--double-prev') === false ||
      arr.includes('--discard-prev') === false  ||
      arr.includes('--discard-next') === false) {
        return arr;
      }

  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
      returnArr.push(arr[i])
      } else {
          if (arr[i] === '--double-next') {
            returnArr.push(arr[i+1])
          } else if (arr[i] === '--double-prev') {
            returnArr.push(arr[i-1]);
          } else if (arr[i] === '--discard-prev') {
            returnArr.pop();
          } else if (arr[i] === '--discard-next' ||  
                            arr[i] === undefined || 
                            arr[i] === null      || 
                            arr[i] === "+"       || 
                            arr[i] === "-") {
            i += 1;
          } else {
            i += 1;
          }
      }
  }
  return returnArr;
}

module.exports = {
  transform
};
