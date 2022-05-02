const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */


  function encodeLine(str) {
    let count = 1;
    let normalArr = [];
    let finalArr = [];
    
    for ( let i  = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]){
        count += 1;
      } else {
        normalArr.push([count, str[i]]);
        count = 1;
      }
    }
    let normalStr = normalArr.join("");
    for (let i = 0; i < normalStr.length; i++) {
      if (normalStr[i] === "1" || normalStr[i] === "," ) {
        continue
      } else {
        finalArr.push(normalStr[i]);
      }
    }

    return finalArr.join("");
  }

module.exports = {
  encodeLine
};
