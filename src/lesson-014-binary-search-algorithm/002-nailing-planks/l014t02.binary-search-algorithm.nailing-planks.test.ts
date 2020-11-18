/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   A: [x1, x2],
 *   B: [x3, x4],
 *   C: [x5, x6],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     A: [1, 2],
 *     B: [5, 7],
 *     C: [9, 10, 12],
 *   },
 *   { // test input 2
 *     A: [5, 8],
 *     B: [8, 9, 10],
 *     C: [4, 6, 8, 10],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l014t02.binary-search-algorithm.nailing-planks.solution');

describe('nailingPlanks test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1], testSet[2]);
      console.log('Result:', output);
    });
  });
  it('test if nailingPlanks is 4', () => {
    const example = [
      [1, 4, 5, 8],
      [4, 5, 9, 10],
      [4, 6, 7, 10, 2],
    ];
    expect(solution(example[0], example[1], example[2])).toEqual(4);
  });
});
