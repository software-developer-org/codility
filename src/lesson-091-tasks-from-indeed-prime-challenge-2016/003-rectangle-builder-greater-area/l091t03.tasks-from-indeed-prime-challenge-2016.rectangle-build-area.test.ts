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

import solution = require('./l091t03.tasks-from-indeed-prime-challenge-2016.rectangle-build-area.solution');

describe('rectangleGreaterBuildArea test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });

  it('testing solution(A = [1, 2, 5, 1, 1, 2, 3, 5, 1], X = 5), returns 2', () => {
    const A = [1, 2, 5, 1, 1, 2, 3, 5, 1];
    const X = 5;
    const output = solution(A, X);
    expect(output).toEqual(2);
  });
});
