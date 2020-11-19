/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   X: [x1, x2],
 *   V: [x3, x4],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     X: [ [1, 2],
 *     Y: [5, 6] ],
 *   },
 *   { // test input 2
 *     X: [5, 10],
 *     Y: [8, 12] ],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l092t02.tasks-from-indeed-prime-2016-college-coders-challenge.diamond-count.solution');

describe('diamondCount test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });

  it('testing if solution(X = [1, 1, 2, 2, 2, 3, 3], Y = [3, 4, 1, 3, 5, 3, 4]), returns 2', () => {
    const X = [1, 1, 2, 2, 2, 3, 3];
    const Y = [3, 4, 1, 3, 5, 3, 4];
    const output = solution(X, Y);
    expect(output).toEqual(2);
  });

  it('testing if solution(X = [1, 2, 3, 3, 2, 1], Y = [1, 1, 1, 2, 2, 2]), returns 0', () => {
    const X = [1, 2, 3, 3, 2, 1];
    const Y = [1, 1, 1, 2, 2, 2];
    const output = solution(X, Y);
    expect(output).toEqual(0);
  });
});
