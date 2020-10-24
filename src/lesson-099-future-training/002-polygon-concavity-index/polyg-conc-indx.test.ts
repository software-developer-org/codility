/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   A: [[x1, x2],[x3, x4], [x5, x6], [x7, x8], [x9, x10]],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     A: [1, 2],[-1, 3], [2, 4], [0, -1], [-2, 1],
 *   }
 * ]
 */
const testData = [];

import solution = require('./polyg-conc-indx.solution');

describe('polygonConcavityTest', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });
});
