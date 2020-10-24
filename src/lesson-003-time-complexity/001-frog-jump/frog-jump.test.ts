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
 *     A: [5, 10, 75],
 *   }
 * ]
 */
const testData = [];

import solution = require('./frog-jump.solution');

describe('frogJump test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1], testSet[2]);
      console.log('Result:', output);
    });
  });
});
