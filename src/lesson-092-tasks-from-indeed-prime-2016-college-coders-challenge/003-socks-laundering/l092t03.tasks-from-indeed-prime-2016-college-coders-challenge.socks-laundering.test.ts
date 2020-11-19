/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   K: k,
 *   C: [x1, x2],
 *   D: [x3, x4],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *   K: 2,
 *   C: [1, 2],
 *   D: [3, 4],
 *   },
 *   { // test input 2
 *   K: 2,
 *   C: [1, 2, 1, 1],
 *   D: [3, 4, 3],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l092t03.tasks-from-indeed-prime-2016-college-coders-challenge.socks-laundering.solution');

describe('socksLaundering test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1], testSet[2]);
      console.log('Result:', output);
    });
  });

  it('testing if solution(K = 2, C = [1, 2, 1, 1], D = [1, 4, 3, 2, 4]), returns 3', () => {
    const K = 2;
    const C = [1, 2, 1, 1];
    const D = [1, 4, 3, 2, 4];
    const output = solution(K, C, D);
    expect(output).toEqual(3);
  });
});
