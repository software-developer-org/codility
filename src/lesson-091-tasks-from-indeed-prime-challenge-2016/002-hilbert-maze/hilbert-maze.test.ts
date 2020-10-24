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

import solution = require('./hilbert-maze.solution');

describe('hilbertMaze test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1], testSet[2], testSet[3], testSet[4]);
      console.log('Result:', output);
    });
  });
});
