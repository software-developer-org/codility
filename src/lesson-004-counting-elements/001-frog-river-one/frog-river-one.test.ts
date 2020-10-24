/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   X: x,
 *   A: [k1, k2],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     X: 5,
 *     A: [1, 2],
 *   },
 *   { // test input 2
 *     X: 7,
 *     A: [5,6,7,8],
 *   }
 * ]
 */
const testData = [];

import solution = require('./frog-river-one.solution');

describe('frogRiver test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });
});
