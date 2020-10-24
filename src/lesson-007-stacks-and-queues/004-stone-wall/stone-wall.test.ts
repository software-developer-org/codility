/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   H: [x1, x2],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     H: [1, 2],
 *   },
 *   { // test input 2
 *     H: [5, 1001],
 *   }
 * ]
 */
const testData = [];

import solution = require('./stone-wall.solution');

describe('stoneWall test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });
});
