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
 *     A: [5, -1, 4, 7],

 *   }
 * ]
 */
const testData = [];

import solution = require('./l099t01.future-training.array-inversion-count.solution');

describe('arrayInversionCount test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });

  it('testing if solution(A = [-1, 6, 3, 4, 7, 4]), returns 4', () => {
    const A = [-1, 6, 3, 4, 7, 4];
    const output = solution(A);
    expect(output).toEqual(4);
  });
});
