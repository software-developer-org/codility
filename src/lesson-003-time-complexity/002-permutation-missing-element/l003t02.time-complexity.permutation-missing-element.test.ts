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
 *     A: [1, 2, 3, 5],
 *   },
 *   { // test input 2
 *     A: [5, 6, 8, 9],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l003t02.time-complexity.permutation-missing-element.solution');

describe('permMissElement test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });
});
