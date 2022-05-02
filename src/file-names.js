const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
const renameFiles = (names) => {

  let namesSetFiltr = new Set();
  let copyCount = 1;
  let returnArr = []

  for (let i = 0; i < names.length; i++) {
    if (!namesSetFiltr.has(names[i])) {
      returnArr.push(names[i]);
      namesSetFiltr.add(names[i]);
      if(copyCount > 1) {
        copyCount = 1;
      }
    } else {
      returnArr.push(names[i] + `(${copyCount})`);
      copyCount += 1;
      namesSetFiltr.add(returnArr[returnArr.length - 1]);
    }    
  }

return returnArr;
}

module.exports = {
  renameFiles
};
