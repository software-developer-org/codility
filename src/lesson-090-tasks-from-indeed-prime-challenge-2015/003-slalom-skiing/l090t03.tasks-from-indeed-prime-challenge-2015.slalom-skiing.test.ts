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

import solution = require('./l090t03.tasks-from-indeed-prime-challenge-2015.slalom-skiing.solution');

describe('slalomSkiing test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });

  it('testing if solution(A = [15, 13, 5, 7, 4, 10, 12, 8, 2, 11, 6, 9, 3], return 8', () => {
    const A = [15, 13, 5, 7, 4, 10, 12, 8, 2, 11, 6, 9, 3];
    const output = solution(A);
    expect(output).toEqual(8);
  });

  it('testing if solution(A = [1, 5], return 2', () => {
    const A = [1, 5];
    const output = solution(A);
    expect(output).toEqual(2);
  });
});
