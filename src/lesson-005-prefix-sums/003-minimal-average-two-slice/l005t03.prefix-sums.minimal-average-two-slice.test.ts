/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   A: [x1, x2, x3],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     A: [1, 2, 3],
 *   },
 *   { // test input 2
 *     A: [5, 8, 12],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l005t03.prefix-sums.minimal-average-two-slice.solution');

describe('minAvgTwoSlice test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });
});
