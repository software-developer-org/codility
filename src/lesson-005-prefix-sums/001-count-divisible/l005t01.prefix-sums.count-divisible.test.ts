/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   A: [x1, x2, x2],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     A: [1, 2, 3],
 *   },
 *   { // test input 2
 *     A: [5, 1001, 7],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l005t01.prefix-sums.count-divisible.solution');

describe('countDivisible test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });
});