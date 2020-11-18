/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   M: m
 *   A: [x1, x2],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     M: 2,
 *     A: [5, 4],
 *   },
 *   { // test input 2
 *     M: 5,
 *     K: [3, 4, 4, 5],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l015t02.caterpillar-method.count-distinct-slice.solution');

describe('countDistinctSlices test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });
  it('test if countDistinctSlices is 9', () => {
    const example = [6, [3, 4, 5, 5, 2]];
    expect(solution(example[0], example[1])).toEqual(9);
  });
});
