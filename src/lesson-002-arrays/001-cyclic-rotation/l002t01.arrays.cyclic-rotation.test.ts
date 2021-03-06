/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   A: [x1, x2],
 *   K: k,
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     A: [1, 2],
 *     K: 5,
 *   },
 *   { // test input 2
 *     A: [5, 1001],
 *     K: 8,
 *   }
 * ]
 */
const testData = [];

import solution = require('./l002t01.arrays.cyclic-rotation.solution');

describe('rotation test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });
});
