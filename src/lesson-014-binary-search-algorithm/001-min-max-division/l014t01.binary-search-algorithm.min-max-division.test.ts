/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   K: k,
 *   M: m,
 *   A: [x1, x2],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     K: 1,
 *     M: 5,
 *     A: [2, 4],
 *   },
 *   { // test input 2
 *     K: 3,
 *     M: 5,
 *     A: [2, 4, 7, 8],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l014t01.binary-search-algorithm.min-max-division.solution');

describe('minMaxDivision test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1], testSet[2]);
      console.log('Result:', output);
    });
  });
});
