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
 * ]
 */
const testData = [];

import solution = require('./l009t01.maximum-slice-problem.max-double-slice.solution');

describe('maxDoubleSliceSum test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });
  it('test if MaxDoubleSliceSum is 17', () => {
    const example = [3, 2, 6, -1, 4, 5, -1, 2];
    expect(solution(example)).toEqual(17);
  });
});
