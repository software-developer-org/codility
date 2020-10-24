/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   N: n,
 *   A: [x1, x2],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     N: 3,
 *     A: [5, 4, 3],
 *   },
 *   { // test input 2
 *     N: 7,
 *     A: [1, 8 , 20],
 *   }
 * ]
 */
const testData = [];

import solution = require('./max-counter.solution');

describe('maxCounters test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });
});
