/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   N: x1,
 *   A: x2,
 *   B: x3,
 *   C: x4,
 *   D: x5,
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     N: 1,
 *     A: 2,
 *     B: 1,
 *     C: 3,
 *     D: 4,
 *   },
 *   { // test input 2
 *     N: 2,
 *     A: 3,
 *     B: 4,
 *     C: 3,
 *     D: 2,
 *   }
 * ]
 */
const testData = [];

import solution = require('./l091t02.tasks-from-indeed-prime-challenge-2016.hilbert-maze.solution');

describe('hilbertMaze test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1], testSet[2], testSet[3], testSet[4]);
      console.log('Result:', output);
    });
  });

  it('testing solution(N = 1, A = 2, B = 1, C = 3 and D = 4), returns 8', () => {
    const N = 1;
    const A = 2;
    const B = 1;
    const C = 3;
    const D = 4;
    const output = solution(N, A, B, C, D);
    expect(output).toEqual(8);
  });

  it('testing solution(N = 2, A = 2, B = 5, C = 6 and D = 6), returns 7', () => {
    const N = 2;
    const A = 2;
    const B = 5;
    const C = 6;
    const D = 6;
    const output = solution(N, A, B, C, D);
    expect(output).toEqual(7);
  });

  it('testing solution(N = 3, A = 6, B = 6, C = 10 and D = 13), returns 39', () => {
    const N = 3;
    const A = 6;
    const B = 6;
    const C = 10;
    const D = 13;
    const output = solution(N, A, B, C, D);
    expect(output).toEqual(39);
  });
});
