const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  DeepDeep = 0;
  calculateDepth(array, deep = 1) {
    for (let i = 0; i < array.length; i++)
      if (Array.isArray(array[i]) === true) {
        this.DeepDeep = this.calculateDepth(array[i], deep + 1)
      }
      let returnDeep = (this.DeepDeep > deep) ? this.DeepDeep : deep;
      this.DeepDeep = 0;
    return returnDeep;
  }
}


module.exports = {
  DepthCalculator
};
