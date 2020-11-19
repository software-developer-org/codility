/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   A: [x1, x2],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     A: [1, 2],
 *   },
 *   { // test input 2
 *     A: [5, 1001],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l017t01.dynamic-programming.min-abs-sum.solution');

describe('minAbsSum test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });

  it('testing solution(A), should return 0', () => {
    // computed the minimum possible value of a given array A of N integers
    const A = [1, 5, 2, -2];
    const output = solution(A);
    // expected output should be 0
    expect(output).toEqual(0);
  });
});
