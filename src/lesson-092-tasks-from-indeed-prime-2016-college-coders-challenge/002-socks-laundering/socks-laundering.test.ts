/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   K: k,
 *   C: [x1, x2],
 *   D: [x3, x4],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *   K: 2,
 *   C: [1, 2],
 *   D: [3, 4],
 *   },
 *   { // test input 2
 *   K: 2,
 *   C: [1, 2, 1, 1],
 *   D: [3, 4, 3],
 *   }
 * ]
 */
const testData = [];

import solution = require('./socks-laundering.solution');

describe('socksLaundering test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1], testSet[2]);
      console.log('Result:', output);
    });
  });
});
