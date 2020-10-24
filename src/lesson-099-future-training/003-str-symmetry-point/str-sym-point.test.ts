/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   S: 'xyz',
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     S: 'racecar,
 *   },
 *   { // test input 2
 *     S: 'x',
 *   }
 * ]
 */
const testData = [];

import solution = require('./str-sym-point.solution');

describe('strSymmetryPoint test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });
});
