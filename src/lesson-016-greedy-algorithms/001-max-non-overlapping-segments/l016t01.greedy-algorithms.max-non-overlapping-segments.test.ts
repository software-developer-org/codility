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
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     A: [ [1, 2],
 *     B: [5, 8] ],
 *   },
 *   { // test input 2
 *     A: [ [5, 11],
 *     B: [9, 11] ],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l016t01.greedy-algorithms.max-non-overlapping-segments.solution');

describe('maxNonoverlappingSegments test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });

  it('testing solution(A, B), should return 3', () => {
    // non-overlapping set of segments from arrays A = [1, 3, 7, 9, 9] and B = [5, 6, 8, 9, 10]
    const A = [1, 3, 7, 9, 9];
    const B = [5, 6, 8, 9, 10];
    const result = 3;
    // expected result should be 3
    expect(solution(A, B)).toEqual(result);
  });
});
