/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   N: [x1],[x2]
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     N: [24],
 *   },
 *   { // test input 2
 *     N: [30],
 *   }
 * ]
 */
const testData = [];

import solution = require('./count-factors.solution');

describe('countFactors test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });
});
