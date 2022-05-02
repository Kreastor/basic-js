const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

  function deleteDigit(n) {
    let arr = [];
    let nString = String(n);
    console.log(nString); //342

    for (let i = 0; i < nString.length; i++) {
      arr.push(nString.slice(0, i) + nString.slice(i + 1));
    }

    console.log(arr); // [ "42", "32", "34" ]

    return Math.max(...arr); 
  }

module.exports = {
  deleteDigit
};
