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

import solution = require('./l090t01.tasks-from-indeed-prime-challenge-2015.flood-depth.solution');

describe('floodDepth test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });

  it('testing if solution(A = [1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2]), return 2', () => {
    const A = [1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2];
    const output = solution(A);
    expect(output).toEqual(2);
  });

  it('testing if solution(A = [5, 8]), return 0', () => {
    const A = [5, 8];
    const output = solution(A);
    expect(output).toEqual(0);
  });
});
